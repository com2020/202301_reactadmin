import React, { Component } from 'react'
import style from './login.less'
import logo from './images/logo.png'
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class Login extends Component {

  onFinish = (event) => {
    // 得到form对象
    console.log('点击了submit按钮')
    console.log(this)
    console.log(event)
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
