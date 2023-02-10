import React from "react";
import './index.less'
import {reqWeather} from '../../api/api'
// import moment from 'momnet'
import { formateDate } from "../../utils/dateUtils";
import LinkButton from "../link-button";
// import linkBottom from antd
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

import withRouter from "../../utils/withRouter";
import menuList from '../../config/menuConfig'

import { Modal } from 'antd';

class Header extends React.Component {
  
  state = {
    weather:'',
    // currentTime: moment.calendarFormat("YYYY-MM-DD hh:mm:ss"),
    currentTime:formateDate(Date.now()),
  }

  getTime = () =>{
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({currentTime})
      // console.log('timer',currentTime )
    },1000)
  }
  
  getWeather = async () => {
    const weather = await reqWeather('110101')
    // console.log('getWeather', weather)
    this.setState({weather})
  }

  getTitle = () => {
    const path = this.props.router.location.pathname
    let title
    menuList.forEach(item => {
      if(item.key === path){
        title = item.title
      } else if (item.children){
        const cItem = item.children.find(cItem => cItem.key === path)
        if(cItem){
          title = cItem.title
        }
      }
    })
    return title
  }

  logout = () => {
    Modal.confirm({
      title: '请确认退出么？',
      content: '请确认退出么？',
      onOk:()=> {

        console.log('OK',this);
        storageUtils.removeUser()
        memoryUtils.user = {}
        this.props.router.navigate('/login')
      }
    })
  }

  componentDidMount(){
    this.getWeather()
    this.getTime()
  }

  componentWillUnmount(){
    // 清除定时器
    clearInterval(this.intervalId)
  }

  render(){
    // this.getWeather()
    // console.log('header-render', this.state)
    const {currentTime,weather} = this.state
    const username = memoryUtils.user.username
    const title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
            <LinkButton onClick={this.logout}>退出</LinkButton>
            {/* <a href="javascript:" onClick={this.logout}>退出</a> */}
            {/* <linkBottom></linkBottom> */}
        </div>

        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src="https://tianqi.2345.com/favicon.ico" alt="weather"/>
            <span>{weather.weather}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)