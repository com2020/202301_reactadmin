import ajax from "./ajax"
import axios from 'axios'
import { message } from 'antd'

const BASE = ''


export const reqLogin = (username, password) => ajax(BASE, {username, password}, 'POST')