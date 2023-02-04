import React from "react";
import { Menu } from "antd";
import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";
import menuList from '../../config/menuConfig'

// 
export default class LeftNav extends React.Component {
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

  getMenuNodes = (menuList) => {
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

  
  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  //   this.menuNodes = this.getMenuNodes(menuList)
  //   console.log(this.menuNodes)
  // }

  render(){
    console.log('render')
    console.log(menuList)
    console.log(menuList.length)
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt='logo' ></img>
          <h1>华东的后台</h1>
        </Link>
        
        <Menu mode="inline" theme="dark">
          {this.getMenuNodes(menuList)}
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