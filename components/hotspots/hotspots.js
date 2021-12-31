const CONSTANT = require('../../utils/constant')

Component({
  pullDownRefresh: null,
  properties: {
    hotspots: {
      type: Array,
      value: []
    },
    platform: {
      type: String,
      value: null
    },
  },
  methods: {
    onload() {
      this.pullDownRefresh = this.selectComponent('#pull-down-refresh');
    },
    onClick(e) {
      const hotspot = e.currentTarget.dataset.hotspot
      const platform = this.properties.platform
      switch (platform) {
        case CONSTANT.WEIBO:
          wx.navigateTo({url:`new?platform=${platform}&key_word=${hotspot.key_word}`})
          break
        case  CONSTANT.ZHIHU:
          wx.navigateTo({url:`new?url=https://s.weibo.com/weibo?q=%23${hotspot.key_word}%23`})
          break
      }
    },
    onPullDownRefresh(e) {
      this.triggerEvent('onPullDownRefresh', e)
    }
  }
  
})
