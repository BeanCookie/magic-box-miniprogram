import {REQUEST} from "miniprogram-request"
const CONSTANT = require('../../utils/constant')

Page({
  data: {
    tabs: [
      {
        value: 0,
        label: '微博',
        platform: CONSTANT.WEIBO,
      },
      // {
      //   value: 1,
      //   label: '知乎',
      //   platform: CONSTANT.ZHIHU,
      // },
    ],
    animation: { duration: 0.3 },
    platform: CONSTANT.WEIBO,
    tabValue: 0,
    page: 1,
    hotspots: null,
  },
  fetchData() {
    const tab = this.data.tabs[this.data.tabValue]
    this.setData({
      platform: tab.platform,
      tabValue: tab.value,
      hotspots: null,
      page: 1,
    })
    REQUEST.get(`/api/v1/hot-news?platform=${this.data.platform}`)
    .then(res => {
      if ( res.data.list.length > 0) {
        this.setData({
          hotspots: res.data.list,
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
  onTabsChange(e) {
    this.setData({
      tabValue: e.detail.index
    })
    this.fetchData()
  },
  onReachBottom() {
    this.setData({
      loading: true
    })

    REQUEST.get(`/api/v1/hot-news?platform=${this.data.platform}&page=${this.data.page}`)
    .then(res => {
      if ( res.data.list.length > 0) {
        this.setData({
          hotspots: [...this.data.hotspots, ...res.data.list],
          page: this.data.page + 1,
        })
      }

      this.setData({
        loading: false,
      })
    })
    .catch(err=>wx.showToast({title:'数据拉取失败'}));
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
})
