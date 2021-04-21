// pages/info/info.js
var utils = require('../utilcompent/utils.js');
const chooseLocation = requirePlugin('chooseLocation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    market: [],
    location : {},
    startAddress : {},
    endAddress : {
      address : '合肥市安徽省黄山区黄山风景区',
      city: '合肥市',
      latitude: 30.154595,
      longitude: 118.157848,
      name : '黄山风景区'
    },
    mode : 'driving'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,"options")
    this.setData({
      market: JSON.parse(options.mar)
    })
  },

  // 用户点击授权
  getLocation: function (userLocation) {
    wx.getLocation({
      type: 'gcj02',
      success: (result) => {
        // 设置了之后用户授权后点击会直接到当前位置
        // var longitude = result.longitude;
        // var latitude = result.latitude;
        // this.setData({
        //   longitude,
        //   latitude
        // })
      },
      fail: function (res) {
        // 判断控制台报的错误提示
        if (res.errMsg == "getLocation:fail:auth deny") {
          // 提醒用户授权失败
          wx.showModal({
            title: '拒绝授权',
            icon: 'none'
          });
            wx.navigateBack({
              delta: 1
            });
          return;
        }
        if (!userLocation || !userLocation.authSetting['scope.userLocation']) {
          // 如果userLocation本身为undefined 则取反将它改为true
          console.log("4=>",userLocation)
          console.log("4=>",!userLocation)
          console.log("5=>",userLocation.authSetting['scope.userLocation'])
          console.log("5=>",!userLocation.authSetting['scope.userLocation'])
          // 取反之后调用getUserLocation()
          this.getUserLocation();
        } 
      },
      complete: () => { }
    });
  },

  goThereHandle:function(){
    console.log("导航");
    let plugin = requirePlugin('routePlan');
    // 使用在腾讯位置服务申请的key
    const key = 'RJBBZ-I5TRJ-SIJFG-KNJYP-SAI2V-HIFNU';
    // 调用的app名称
    const referer = '文智云旅';
    let startPoint = JSON.stringify(this.data.startAddress);
    let endPoint = JSON.stringify(this.data.endAddress);
    let mode = this.data.mode;
    if(startPoint){
      wx.navigateTo({
        url: 'plugin://routePlan/index?key='+key+'&referer='+referer+'&endPoint='+endPoint+'&navigation=1'+'&mode='+mode,
      });
    }else{
      wx.navigateTo({
        url: 'plugin://routePlan/index?key='+key+'&referer='+referer+'&endPoint='+endPoint+'&startPoint='+startPoint+'&navigation=1'+'&mode='+mode,
      });
    }
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
    utils.getUserLocation();
    const location = chooseLocation.getLocation();
    console.log(location);
    this.setData({
      startAddress: location
    })
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