import axios from 'axios'
import { message } from 'antd'
import { configConsumerProps } from 'antd/es/config-provider'

// export default function ajax(url='', data={}, type='GET'){
//   // console.log('ajax', url)
//   // console.log('ajax', data)
//   // console.log('ajax', type)

//   if(type === 'GET'){
//     return axios.get(url, {
//       params:data
//     })
//   } else if (type ==='POST') {
//     return axios.post(url, data);
//   } else{
//     console.log('type input error: ', type)
//   }
// }


// export default async function ajax(url='', data={}, type='GET'){
//   // console.log('ajax', url)
//   // console.log('ajax', data)
//   // console.log('ajax', type)
//   function tempFun(url='', data={}, type='GET') {
//     if(type === 'GET'){
//       return axios.get(url, {
//         params:data
//       })
//     } else if (type ==='POST') {
//       return axios.post(url, data);
//     } else{
//       console.log('type input error: ', type)
//     }
//   }
  
//   try {
//     await tempFun(url='', data={}, type='GET')
//   } catch (error) {
//     console.log('network error: ', error)
//   }
// }


// 返回时，已经讲异步请求，等待到同步返回的结果。
// 返回值：value 不是 Promise对象
export default async function ajax(url='', data={}, type='GET'){
  console.log('ajax', url)
  console.log('ajax', data)
  console.log('ajax', type)
  try {
    if(type === 'GET'){
      return await axios.get(url, {
        params:data
      })
    } else if (type ==='POST') {
      return await axios.post(url, data);
    } else{
      console.log('type input error: ', type)
    }
  } catch (error) {
    message.info('network error: '+ JSON.stringify(error.message))
    console.log('network error: ', error)
  }

}