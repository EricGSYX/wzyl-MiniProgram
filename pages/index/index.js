// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (result) => {
        if (result.authSetting['scope.userInfo']) {
          console.log("获取成功", result.authSetting['scope.userInfo']);
          wx.getUserInfo({
            success: (result) => {
              console.log("userInfo=>", result);
            },
          });
        } else {
          console.log("获取失败")
          wx.redirectTo({
            url: '/pages/authorize/authorize',
          });
        }
      },
    });
  },

  doTravelA() {
    // console.log("点击了")
    wx.navigateTo({
      url: '/pages/travelA/travelA',
    });
  },
  doTravelB() {
    // console.log("点击了")
    wx.navigateTo({
      url: '/pages/travelB/travelB',
    });
  },
  doPresent() {
    // console.log("点击了")
    wx.navigateTo({
      url: '/pages/present/present',
    });
  },
  doRecommend() {
    // console.log("点击了")
    wx.navigateTo({
      url: '/pages/recommend/recommend',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})