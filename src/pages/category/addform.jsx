import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'
import { Option } from 'antd/es/mentions'
import { values } from 'store/storages/all'

const Item = Form.Item

export default class AddForm extends Component {
    // getInput = (values) => {
    //   console.log('AddForm get Input ')
    //   console.log('AddForm values', values)
    //   console.log('AddForm this', this)
    //   this.props.setInput(values)
    // }

    getClasses = (values) => {
      // console.log('AddForm get classes ')
      // console.log('AddForm get classes values', values)
      // console.log('AddForm get classes this', this)
      
      this.props.setClasses(this)
    }

    handleChange = (value) => {
      // console.log('classess handlechange value', value)
      this.value = value
    }

    render() {
      const {categorys} = this.props
      const options = [{value:'0', label:'一级分类'}] //初始化一级分类列表
      // const options=[
      //   {
      //     value: 'hahah',
      //     label: 'Jack',
      //     id:'1'
      //   },
      //   {
      //     value: 'lucy',
      //     label: 'Lucy',
      //     id:'2'
      //   },
      //   {
      //     value: 'Yiminghe',
      //     label: 'yiminghe',
      //     id:'3'
      //   },
      //   {
      //     value: 'disabled',
      //     label: 'Disabled',
      //     id:'4'
      //   },
      // ]

      for (let index = 0; index < categorys.length; index++) {
        
        const element = categorys[index]
        // console.log('element',element)
        element.value = element._id
        element.label = element.name
        options.push(element)        
      }

      // option = categorys.map( c =>  
      //   {'value' = c._id, 'label' = c.name}
      // )

      // console.log(categorys)
      // console.log('AddForm', this)


      return (
        <Form>
          <Item initialValue='0' name='classer'>
            <Select ref={this.getClasses} options={options} onChange={this.handleChange} defaultValue={0}>
              {/* <Option key='0'>一级分类</Option>
              {} */}
            </Select>
          </Item>
          <Item  
              name="username"   rules={[{ required: true, message: "名称必须输入!" }]} >
            <Input placeholder='请输入分类名称'  ref={values => this.props.setInput(values)} ></Input>
          </Item>
        </Form>
      )
    }
}
