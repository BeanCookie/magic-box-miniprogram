const CONSTANT = require('../../utils/constant')

Page({
  data: {
    url: null,
  },
  onLoad(options) {
    const platform = options.platform
    switch (platform) {
      case CONSTANT.WEIBO:
        this.setData({
          url : `https://s.weibo.com/weibo?q=%23${options.key_word}%23`
        })
        break
    }
    
  },
  onGoBack(e) {
    wx.navigateBack({
      delta: 1
    });
  }
})
