import ajax from "./ajax"
import axios from 'axios'
import { message } from 'antd'
import  jsonp from "jsonp"

const BASE = ''


export const reqLogin = (username, password) => ajax(BASE, {username, password}, 'POST')


// 获取分类列表
export const reqCategorys = (parentId) => ajax(BASE+'/manage/category/list',{parentId},'GET' ) 


// 添加分类列表
export const reqAddCategory = (categoryName, parentId) => ajax(BASE+'/manage/category/add',{categoryName, parentId}, 'POST' ) 


// 修改分类列表
export const reqUpdateCategory = ({categoryName, categoryId}) => ajax(BASE+'/manage/category/update',{categoryName, categoryId}, 'POST' ) 

export const reqWeather = (city) =>{

  return new Promise((resolve, reject) =>{

    const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=1c79c6bd20d641c3618edd070fb898e3`
    // city = 110101
    jsonp(url,{},(error,data) =>{
      console.log('jsonp()', error,data)

      if(!error && data.status ==='1'){
        // 取出所需要的数据
        const weather = data.lives[0].weather
        console.log(weather)
        resolve({weather})
      } else {
        console.log('获取天气信息失败')
        message.error('获取天气信息失败')
      }
    })

  })

} 
