// pages/fixedposition2/fixedposition2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 控制弹窗的打开关闭
   * 1: 点击弹窗以外的位置可以消失弹窗
   * 2: 用到弹窗和关闭弹窗的业务逻辑时都可调用
   */
  toggleDialog() {
    console.log("点击了")
    this.setData({
      showDialog : !this.data.showDialog
    })
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