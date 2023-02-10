import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item

export default class UpdateForm extends Component {

    render() {
        console.log('UpdateForm' , this)
        const {category} = this.props
        
        return (
            <Form>
                <Item name='usename' initialValue={category ? category :''} rules={[{ required: true, message: "名称必须输入!" }]} >
                    <Input ref={(input) => this.props.setForm(input)}></Input>
                </Item>
            </Form>
        )
    }
}
