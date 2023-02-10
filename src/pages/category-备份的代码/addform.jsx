import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'
import { Option } from 'antd/es/mentions'
import { values } from 'store/storages/all'

const Item = Form.Item

export default class AddForm extends Component {
    getInput = (values) => {
      console.log('AddForm get Input ')
      console.log('AddForm values', values)
      console.log('AddForm this', this)
      this.props.setInput(values)
    }

    getClasses = (values) => {
      console.log('AddForm get classes ')
      console.log('AddForm values', values)
      console.log('AddForm this', this)
      this.props.setInput(values)
    }

    render() {
        console.log('AddForm')
        console.log(this)
        return (
            <Form>
              <Item initialValue='0' name='classer' noStyle>
                <Select ref={this.getClasses}>
                  <Option key='0'>一级分类</Option>
                </Select>
              </Item>
              <Item  
                 name="username"   rules={[{ required: true, message: "名称必须输入!" }]} noStyle>
                <Input placeholder='请输入分类名称'  ref={values => this.props.setInput(values)} ></Input>
                </Item>
            </Form>
        )
    }
}
