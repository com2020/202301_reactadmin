import React from "react";
import { Menu } from "antd";
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";
import menuList from '../../config/menuConfig'

import withRouter from '../../utils/withRouter'

// 
class LeftNav extends React.Component {
  // {
  //   title: '首页', // 菜单标题名称
  //   key: '/home', // 对应的path
  //   icon: <HomeOutlined />, // 图标名称
  //   isPublic: true, // 公开的
  // },
  // {
  //   title: '商品',
  //   key: '/products',
  //   icon: <AppstoreAddOutlined />,
  //   children: [ // 子菜单列表
  //     {
  //       title: '品类管理',
  //       key: '/category',
  //       icon: <MenuOutlined />
  //     },
  //     {
  //       title: '商品管理',
  //       key: '/product',
  //       icon: <MenuOutlined /> 
  //     },
  //   ]
  // },

  getMenuNodes_map = (menuList) => {
    console.log('getMenuNodes')
    console.log(menuList)
    console.log(typeof menuList)
    return menuList.map(item => {
      if(!item.children){
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      else{
        return(
          <Menu.SubMenu key={item.key} title={item.title} icon={item.icon}>
              {this.getMenuNodes(item.children)}
          </Menu.SubMenu>
        )
      }
    })            
  }

  getMenuNodes = (menuList) => {
    console.log('getMenuNodes reduce')
    const path = this.props.router.location.pathname

    return menuList.reduce((pre, item) =>{
      // 向pre添加<Menu.Item>
      if(!item.children){
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      }else{
        // 向pre中添加< SubMenu>
        // 查找一个与当前请求路径匹配的子Item
        const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key
        }

        pre.push((
          <Menu.SubMenu key={item.key} title={item.title} icon={item.icon}>
            {this.getMenuNodes(item.children)}
          </Menu.SubMenu>
        ))
      }
      
      return pre 
    }, [])
  }
  
  // TODO 这个函数没有调用，怎么回事？
  componentWillUnmount(){
    console.log('componentWillUnmount')
    // debugger
    this.menuNodes = this.getMenuNodes(menuList)
    console.log(this.menuNodes)
  }

  render(){
    console.log('render')
    // console.log(menuList)
    // console.log(menuList.length)
    console.log(this)
    const menuNodes = this.getMenuNodes(menuList)
    
    const path = this.props.router.location.pathname
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt='logo' ></img>
          <h1>华东的后台</h1>
        </Link>
        {/* openKeys={[this.openKey]} */}
        <Menu mode="inline" theme="dark" selectedKeys={[path]} >
          {menuNodes}
        </Menu>
      </div>
      // <div>测试看看能否通过</div>
    )

  }
}

export default withRouter(LeftNav)

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