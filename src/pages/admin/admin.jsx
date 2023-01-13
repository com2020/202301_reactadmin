import React, { Component} from 'react'
import {Button} from "antd"


export default class Admin extends Component {
  render() {
    console.log("try")
    return (
      <div>
        <h1>Admin</h1>
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
