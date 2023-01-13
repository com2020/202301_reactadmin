import React, { Component } from 'react'
import style from './login.less'
import logo from './images/logo.png'
import { Button, Checkbox, Form, Input } from 'antd';




export default class Login extends Component {

  handleSubmit = (event) => {
    // 得到form对象
    const form = this.props.form
    // // 获取表单项的输入数据
    const values = form.getFieldsValue()
    console.log('handleSubmit()', values)
  }
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
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
