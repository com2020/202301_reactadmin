import React, { Component } from 'react'
import style from './login.less'
import logo from '../../assets/images/logo.png'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from '../../api/api';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
// import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from 'history'

import { Navigate } from 'react-router-dom';
// https://segmentfault.com/a/1190000041700003
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }

// const history = createBrowserHistory();


// https://blog.csdn.net/liyonghong3333/article/details/124969089

// import { useNavigate } from 'react-router-dom'
// 高阶组件包装useNavigate()功能
// 原因：类组件中无法使用useNavigate()，会报错
// React Hook "useNavigate" cannot be called in a class component.
function widthUseNavigate(WrapCompontent) {
  // 设置别名
  WrapCompontent.displayName = `widthUseNavigate${getDisplayName(WrapCompontent)}`
  return function NavigateCompont() {
    const navigate = useNavigate()
    // 给传入的组件新增一个to方法，传给原始组件的props，在原始组件中通过this.props.to(参数)使用
    return <WrapCompontent navigate={navigate}></WrapCompontent>
  }
}
 
// 别名
function getDisplayName(WrapCompontent) {
  return WrapCompontent.displayname || WrapCompontent.name || 'Component'
}

class Login extends Component {

  onFinish = async (value) => {
    console.log('点击了submit按钮')

    const {username, password} = value
    // const navigate = useNavigate()
    
    const regValue = await reqLogin(username, password)
    console.log(regValue)
    // console.log('Login onFinish:', regValue)
    if ( regValue && (regValue.status === 0 ||regValue.status === 200) &&(regValue.data.status === 0) ) {
      message.info('登录成功')

      //保存user
      let user = regValue.data.data
      memoryUtils.user = user
      storageUtils.saveUser(user)
      console.log('user: ', user)
      console.log('memoryUtils: ', memoryUtils)
      this.props.navigate('/')
    }

    // let p = reqLogin(username, password)
    // p.then(value => {
    //   console.log('get feedback in on Finish')
    //   console.log(value)
    // }).catch(
    //   reason => {console.log(reason)}
    // )
    
    console.log('当前组件 this ',this)
    // console.log(value)
    // const form = this.props.form
    // // // 获取表单项的输入数据
    // const values = form.getFieldsValue()
    // console.log('handleSubmit()', values)
  }

  /*
  对密码进行自定义验证
  */
  /*
   用户名/密码的的合法性要求
     1). 必须输入
     2). 必须大于等于4位
     3). 必须小于等于12位
     4). 必须是英文、数字或下划线组成
    */
    //  validatePwd = (rule, value, callback) => {
    //   console.log('validatePwd()', rule, value)
    //   if(!value) {
    //     callback('密码必须输入')
    //   } else if (value.length<4) {
    //     callback('密码长度不能小于4位')
    //   } else if (value.length>12) {
    //     callback('密码长度不能大于12位')
    //   } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    //     callback('密码必须是英文、数字或下划线组成')
    //   } else {
    //     callback() // 验证通过
    //   }
    //   // callback('xxxx') // 验证失败, 并指定提示的文本
    // }
    validatePwd = (rule, value) => {
      console.log(rule, value)
      if (!value) {
        return Promise.reject("密码必须输入");
      } else if (value.length < 4) {
        return Promise.reject("密码不能小于4");
      } else if (value.length > 12) {
        return Promise.reject("密码不能大于12");
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return Promise.reject("密码必须由大小写字母或者数字组成");
      } else {
        return Promise.resolve(); //验证通过
      }
    };

  render() {
    console.log("in login page")
    console.log(style)
    const user = memoryUtils.user
    if(user && user._id) {
      return <Navigate to='/'/>
    }
    return (
      <div className='login'>
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </header>
        
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form
            name="normal_login"
            className="login-form"
            // onFinish={this.handleSubmit}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={{ remember: true }}
          >

            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' },
              { max: 12, message: '用户名最多十二位' },
              { min: 3, message: '用户名至少三位' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文,数字和下划线组成' }
            ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>


            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }, {validator:this.validatePwd}]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

// https://github.com/faimi/my-react/blob/master/src/pages/login/Login.js
// export default withRouter(Login);

// 使用高阶组件包裹当前类组件
const NavigateCompont = widthUseNavigate(Login)
// 导出包裹后的类组件
export default NavigateCompont
