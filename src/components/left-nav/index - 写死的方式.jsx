import React from "react";
import { HomeOutlined, AppstoreAddOutlined, MenuOutlined, FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, BgColorsOutlined } from '@ant-design/icons';
import { Menu } from "antd";
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";
import menuList from '../../config/menuConfig'

// 
export default class LeftNav extends React.Component {
  render(){
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt='logo' ></img>
          <h1>华东的后台</h1>
        </Link>
        
        <Menu mode="inline" theme="dark">
          
            <Menu.Item key='/home'>
              <Link to="/home">
                <HomeOutlined />
                <span>主页</span>
              </Link>
            </Menu.Item>
         
            <Menu.SubMenu key='sub1' icon={<AppstoreAddOutlined />} title={<span>商品</span>}>
              
              <Menu.Item key='/category'>
                <Link to="/category">
                  <MenuOutlined /> 
                  <span>品类管理</span>
                </Link>
              </Menu.Item>
             
              <Menu.Item key='/product'>
                <Link to="/product">
                  <MenuOutlined />
                  <span>商品管理</span>
                </Link>
              </Menu.Item>
              
            </Menu.SubMenu>

            <Menu.Item key='/role'>
              <Link to="/role">
                <TeamOutlined />
                <span>角色管理</span>
              </Link>
            </Menu.Item>
         
            <Menu.Item key='/user'>
              <Link to="/user">
                <UserOutlined />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
         
            
        </Menu>
      </div>
      // <div>测试看看能否通过</div>
    )

  }
}

// // 循环变量的方式，从官网中直接引用过来的。
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];


// export default class LeftNav extends React.Component {
//   render(){
//     return (
//       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       // <div>测试看看能否通过</div>
//     )

//   }
// }