Page({
  data: {
    url: null,
  },
  onLoad(options) {
    this.setData({
      url : options.url
    })
  },
  onGoBack(e) {
    wx.navigateBack({
      delta: 1
    });
  }
})
