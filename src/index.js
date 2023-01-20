import React from "react";
import ReactDOM from "react-dom";
import { render } from "react";

import { createRoot } from "react-dom/client"
import App from "./App";
import {ConfigProvider} from 'antd'

import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

const user = storageUtils.getUser()
memoryUtils.user = user

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <ConfigProvider theme={
    {
      token:{
        colorPrimary:'#1DA57A'
      }
    }
  }>
    <App />
  </ConfigProvider>
  )
// ReactDOM.render(<App />, document.getElementById("root"))
