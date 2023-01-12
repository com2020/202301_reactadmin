import React, {Component} from "react";
import { Button,message} from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

// const [messageApi, contextHolder] = message.useMessage();

{/* {contextHolder} */}

// react 一个是函数式的编程
// const App = () => {
//   const [messageApi, contextHolder] = message.useMessage();
//   const info = () => {
//     messageApi.info('Hello, Ant Design!');
//   };
//   return (
//     <>
//       {contextHolder}
//       <Button type="primary" onClick={info}>
//         Display normal message
//       </Button>

//       <Button>Default Button</Button>
//       <Button type="dashed">Dashed Button</Button>
//       <Button type="text">Text Button</Button>
//       <Button type="link">Link Button</Button>
//     </>
//   );
// };
// export default App;


// react 一个是组件化的编程

// export default class App extends Component {  
  
//   handleClick = () => {
//     message.info("按钮被点下了")
//     // console.log("我草，怎么还不行")
//   }

//   render(){
    
//     return (
//       <div>    
//         <p><Button type="primary" onClick={this.handleClick}>测试看看能否出来</Button></p>
//         <Button type="primary">Primary Button</Button>
//         <Button>Default Button</Button>
//         <Button type="dashed">Dashed Button</Button>
//         <Button type="text">Text Button</Button>
//         <Button type="link">Link Button</Button>
//       </div>
//     )
//   }
// }


export default class App extends Component {  

  render(){

    // You can do this:
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route path="dashboard" element={<Dashboard />} />
  //       <Route path="about" element={<About />} />
  //     </Route>
  //   )
  // );
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    )
  }
}
