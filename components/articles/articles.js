const CONSTANT = require('../../utils/constant')

Component({
  properties: {
    articles: {
      type: Array,
      value: []
    },
    platform: {
      type: String,
      value: null
    }
  },
  methods: {
    onClick(e) {
      const article = e.currentTarget.dataset.article
      const platform = this.properties.platform
      switch (platform) {
        case CONSTANT.JUEJIN:
          wx.navigateTo({url:`article?url=https://juejin.cn/post/${article.id}`})
          break
        case  CONSTANT.CSDN:
          wx.navigateTo({url:`article?url=https://blog.csdn.net/${article.user_name}/article/details/${article.id}`})
          break
      }
    },
    onPullDownRefresh(e) {
      this.triggerEvent('onPullDownRefresh', e)
    }
  }
  
})
