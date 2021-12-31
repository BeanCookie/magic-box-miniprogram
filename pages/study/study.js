// index.js
import {REQUEST} from "miniprogram-request"
const CONSTANT = require('../../utils/constant')

Page({
  data: {
    tabs: [
      {
        label: "掘金",
        value: 0,
        platform: CONSTANT.JUEJIN,
      },
      {
        label: "CSDN",
        value: 1,
        platform: CONSTANT.CSDN,
      },
      // {
      //   label: "美团技术团队",
      //   value: 2,
      //   platform: CONSTANT.MEITUAN,
      // },
      // {
      //   label: "博客园",
      //   value: 3,
      //   platform: CONSTANT.BOKEYUAN,
      // },
    ],
    animation: { duration: 0.3 },
    platform: CONSTANT.JUEJIN,
    tabValue: 0,
    page: 1,
    articles: null,
    loading: true,
  },
  fetchData() {
    const tab = this.data.tabs[this.data.tabValue]
    this.setData({
      platform: tab.platform,
      tabValue: tab.value,
      articles: null,
      page: 1,
    })
    REQUEST.get(`/api/v1/articles?platform=${this.data.platform}`)
    .then(res => {
      if ( res.data.list.length > 0) {
        this.setData({
          articles: res.data.list,
          page: this.data.page + 1,
        })
      }
      this.setData({
        loading: false,
      })
    })
    .catch(err=>wx.showToast({title:'数据拉取失败'}));
  },
  onLoad() {
    this.fetchData()
  },
  onReachBottom() {
    this.setData({
      loading: true
    })

    REQUEST.get(`/api/v1/articles?platform=${this.data.platform}&page=${this.data.page}`)
    .then(res => {
      if ( res.data.list.length > 0) {
        this.setData({
          articles: [...this.data.articles, ...res.data.list],
          page: this.data.page + 1,
        })
      }

      this.setData({
        loading: false,
      })
    })
    .catch(err=>wx.showToast({title:'数据拉取失败'}));
  },
  onTabsChange(e) {
    this.setData({
      tabValue: e.detail.index
    })
    this.fetchData()
  },
  onPullDownRefresh(e) {
    this.setData({
      articles: null,
      page: 1,
    })
    this.fetchData()
    const { callback } = e.detail.detail
    callback()
  },
  onSubmit(e) {
    console.log(e);
  },
})
