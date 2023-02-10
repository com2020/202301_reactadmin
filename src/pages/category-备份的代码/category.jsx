import React from "react";
import { Card, Table, Button } from "antd";
import { PlusOutlined , ArrowRightOutlined} from "@ant-design/icons";

import {Modal, message } from "antd";


import LinkButton from "../../components/link-button";



import { reqCategorys } from "../../api/api";
import AddForm from "./addform";
import UpdateForm from "./updateform";
import withRouter from "../../utils/withRouter";

class Category extends React.Component {
  state = {
    categorys: [], // 一级分类列表
    subCategorys: [], // 二级分类列表
    loading: false, // 是否正在获取数据中。
    parentId:'0', //当前需要显示的父分类列表的parentId
    parentName:'',
    showStatus:0 //0 都不显示，1 显示添加，2 显示更新
  }

  //初始化列标签
  columns = [
    {
      title: '一级分类',
      dataIndex: 'name',
      key: '_id',
      width:'70%'
    },
    {
      title: '操作',
      render:(category) => {
        // console.log('初始化列标签 columns category: ', category)
        return (
          <span>
            <LinkButton onClick = {() => this.showUpdate(category)}>
              修改分类
            </LinkButton>
            {/* 如何向事件回调函数传递参数，先定义一个匿名函数，在函数调用处理的函数并传递参数 */}
            {this.state.parentId === '0' ? <LinkButton onClick = {() => this.showSubCategorys(category)}>查看子分类</LinkButton> : null}
            
          </span> 
        )
      }
    },
  ]
  
  getCategory = async () => {
    // 在发请求前，显示loading
    this.setState({loading:true})
    const {parentId} = this.state
    const result = await reqCategorys(parentId)
    // 在请求完成后，隐藏Loading
    this.setState({loading:false})
    console.log('getCategory',result)

    if(result.status === 200){
      const categorys = result.data.data
      if (parentId === '0') {
        // 更新一级分类状态
        this.setState({categorys})
      } else {
        this.setState({subCategorys:categorys})
      }
      
    } else {
      message.error('获取分类列表失败')
      
    }
  }

  showCategorys = () => {
    this.setState({
      parentId:'0',
      parentName:'',
      subCategorys: []
    })
  }

  showSubCategorys = (category) => {
    this.setState({
      parentId:category._id,
      parentName:category.name
    }, () => {
      console.log('parentId', this.state.parentId)
      this.getCategory()
    })
  }


  showAdd = () => {
    this.setState({showStatus:1})
  }

  showUpdate = (category) => {
    console.log('showUpdate')
    this.category = category;
    this.setState({ showStatus: 2 });
  }

  hanldCancel = () => {
    this.setState({showStatus:0})
  }

  addCategory = () => {
    console.log('click addCategory')
    // const parentId = this.classes.props.value;
    // const categoryName = this.input.props.value;
    this.setState({showStatus:0})
    console.log('category', this)
    console.log('this.classes', this.classes)
    console.log('this.input.input', this.input.input)
    
  }

  updataCategory = () => {
    
    console.log('click updataCategory')
    this.setState({showStatus:0})

  }

  constructor(props){
    super(props)
    console.log('这里应该看看是否初始化了')
  }

  // 执行异步任务，发送异步ajax请求，获取分类列表。
  componentDidMount(){
    this.getCategory()
  }

  render(){

    const {categorys, loading, parentId, parentName, subCategorys, showStatus} = this.state
    
    

    // card 的左侧
    const title = parentId === '0' ? '一级分类列表' :(
      <span>
        <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>
        <ArrowRightOutlined />
        <span>{parentName}</span>
      </span>
    )

    // card 的右侧
    const extra = (
      <Button type="primary" onClick={this.showAdd}>
          <PlusOutlined/> 添加
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table 
          bordered
          rowKey='_id'
          loading = {loading}
          dataSource={parentId==='0' ? categorys : subCategorys} 
          columns={this.columns}
          pagination={{defaultPageSize: 6, showQuickJumper: true}}
        />;

        <Modal
          title = '添加分类' 
          open = {showStatus === 1 }
          onOk = {this.addCategory}
          onCancel = {this.hanldCancel}
          
        >
          <AddForm
            categorys = {categorys}
            setClasses = {(classes) => {
              this.classes = classes
            }}
            setInput = { (input) => {
              console.log('setInput in Category this', this)
              console.log('setInput in Category input', input)
              this.input = input
            }}>  
          </AddForm>
        </Modal>

        <Modal
          title = '修改分类' 
          open = {showStatus === 2 }
          onOk = {this.updataCategory}
          onCancel = {this.hanldCancel}
        >
          <UpdateForm></UpdateForm>
        </Modal>
      </Card>
      
      )
  }
}

export default withRouter(Category)