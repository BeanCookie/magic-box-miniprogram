// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    articles: ["a", "b", "c"]
  },
  onChange(event) {
    console.log(event);
  },
})
