// app.js
import {REQUEST, transformRequestResponseOkData} from 'miniprogram-request';

// 设置全局配置，设置一次全部生效
// 设置请求根地址,可选
REQUEST.Defaults.baseURL = "https://lzzz.work"
// 添加监听时间 可选
// 记录每次响应
// REQUEST.Listeners.onResponse.push(console.log); 
// 自动提取返回值为 2xx 时的 `response.data`
REQUEST.Defaults.transformResponse = transformRequestResponseOkData

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
