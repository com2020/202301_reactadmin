import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import LeftNav from '../../components/left-nav'
import memoryUtils from '../../utils/memoryUtils'
import { Navigate } from 'react-router-dom';
import Header from '../../components/header';
import Category from '../category/category';
import Home from '../home/home';
import Line from '../charts/line';
import Product from '../product/product';
import Role from '../charts/pie';
import User from '../user/user';
import Bar from '../charts/bar';
import Pie from '../charts/pie';


// import { PieChartOutlined } from '@ant-design/icons'
const {Content, Footer, Sider } = Layout;

export default class Admin extends Component {
  // constructor(){
  //   // const [collapsed, setCollapsed] = useState(false);
  //   const {
  //     token
  //   } = theme.useToken();
  // }


  render() {
    const user = memoryUtils.user
    console.log('admin user: ', user)

    if (!user||!user._id) {
      return <Navigate to={'/Login'}></Navigate>
    }

    // console.log("try")
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>我是头部</Header>
          <Content style={{ backgroundColor: '#ccc'}}>
            <Routes>
              <Route path="home" element={<Home />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="product" element={<Product />}></Route>
              <Route path="role" element={<Role />}></Route>
              <Route path="user" element={<User />}></Route>
              <Route path="charts/line" element={<Line />}></Route>
              <Route path="charts/bar" element={<Bar />}></Route>
              <Route path="charts/pie" element={<Pie />}></Route>
              <Route path="/" element={<Navigate to="/home" replace></Navigate>}></Route>
              
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#bfbfbf' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}
// // 以下使用了antd的Layout的布局，其中Sider等都已经实现了逻辑，但尝试着自己实现一遍。
// export default class Admin extends Component {
//   // constructor(){
//   //   // const [collapsed, setCollapsed] = useState(false);
//   //   const {
//   //     token
//   //   } = theme.useToken();
//   // }


//   render() {
//     // console.log("try")
//     return (
//       <Layout style={{ minHeight: '100%' }}>
//         <Sider collapsible >
//           <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//         </Sider>
//         <Layout className="site-layout">
//           <Header style={{
//             padding: 0
//           }}>我是头部</Header>
//           <Content style={{ margin: '0 16px' }}>

//             <div style={{ padding: 24, minHeight: 360  }}>
//               Bill is a cat.
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center', color: '#bfbfbf' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
//         </Layout>
//       </Layout>
//     )
//   }
// }

// export default class Admin extends Component {
//   render() {
//     console.log("try")
//     return (
//       <div>
//         <h1>Admin</h1>
//         <Button type="primary">Primary Button</Button>
//       </div>
//     )
//   }
// }