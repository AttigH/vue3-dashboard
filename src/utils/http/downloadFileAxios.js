import Vue from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue'
import { ACCESS_TOKEN, USER_INFO } from '@/store/mutation-types'
import { baseURL } from '@/utils/util'

const ContentType = {
  urlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  json: 'application/json',
  formData: 'multipart/form-data'
}

const baseService = axios.create({
  baseURL,
  timeout: 60000,
  responseType: 'blob',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// request interceptor
baseService.interceptors.request.use(
  (config) => {
    const token = Vue.ls.get(ACCESS_TOKEN)
    const userinfo = Vue.ls.get(USER_INFO)
    if (token) {
      config.headers['token'] = token
    }
    if (userinfo) {
      config.headers['username'] = userinfo.username
    }
    config.headers['Content-Type'] = ContentType.json
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

baseService.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const blob = res.data
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName)
      } else {
        const link = document.createElement('a')
        const body = document.getElementsByTagName('body')[0]
        link.href = window.URL.createObjectURL(blob)
        if (res.headers['content-disposition']) {
          link.download = res.headers['content-disposition'].split('=')[1].trim()
        } else {
          link.download = res.config.url.split('_')[1]
        }
        body.appendChild(link)
        link.click()
        window.URL.revokeObjectURL(link.href)
        body.removeChild(link)
      }
      return true
    } else if (res.status === 401 || res.status === 403) {
      message.error('Login expired or insufficient permissions, please log in again!')
      return false
    } else if (res.status === 500) {
      message.error('Request data failed, please try again!')
      return false
    } else if (res.status === 406) {
      message.error('Login timeout, please log in again!')
      Vue.push({ name: 'login' })
      return false
    }
    return res
  },
  (error) => {
    const msg = error.message
    const result = error.response
    if (result) {
      const { data } = result
      message.error(data.msg || `${data.status}: ${data.enMsg}`)
    } else if (msg) {
      if (msg === 'Network Error') {
        message.error('Network error, please check the network!')
      } else {
        message.error(msg)
      }
    } else {
      message.error('Unknown error, please try again!')
    }
    return Promise.reject(error)
  }
)

export default baseService
