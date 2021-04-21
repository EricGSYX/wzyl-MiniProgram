// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标记点
    markers: [
    ],
    // 经度
    longitude: "",
    // 纬度
    latitude: "",
    location: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocationHandle();
    this.getUserLocation();
  },


  // 获取用户授权
  getUserLocation: function () {
    wx.getSetting({
      success: (result) => {
        // 拒绝授权后再次进入重新授权
        console.log("授权与否", result.authSetting['scope.userLocation'])
        if (result.authSetting['scope.userLocation'] != undefined && result.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '',
            content: '【文智云旅】需要获取你的地理位置,请确认授权',
            confirmColor: '#3CC51F',
            cancelColor: '#000000',
            success: (res) => {
              if (res.cancel) {
                wx.showModal({
                  title: '拒绝授权',
                  icon: 'none'
                });
                wx.navigateBack({
                  delta: 1
                });
              } else if (res.confirm) {
                wx.openSetting({
                  success: (data) => {
                    if (data.authSetting['scope.userLocation'] == true) {
                      // 如果等于true 调用this.getLocationHandle()
                      this.getLocationHandle();
                    } else {
                      wx.showModal({
                        title: '拒绝授权',
                        icon: 'none'
                      });
                      wx.navigateBack({
                        delta: 1
                      });
                    }
                  },
                  fail: () => { },
                  complete: () => { }
                });
              }
            },
            fail: () => { },
            complete: () => { }
          });
        } else if (result.authSetting['scope.userLocation'] == undefined) {
          this.getLocationHandle();
        } else if (result.authSetting['scope.userLocation']) {
          this.getLocationHandle();
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },

  // 获取起始位置经纬度
  getLocationHandle: function (userLocation) {
    wx.getLocation({
      type: 'wgs84',
      success: (result) => {
        var longitude = result.longitude;
        var latitude = result.latitude;
        this.setData({
          longitude,
          latitude
        })
        this.moveToLocation();
      },
      fail: function (res) {
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
          this.getUserLocation();
        } else if (userLocation.authSetting['scope.userLocation']) {

          wx.showModal({
            title: '',
            content: '请在系统设置中打开定位服务',
            showCancel: false,
            success: (result) => {
              if (result.confirm) {
                wx.navigateBack({
                  delta: 1
                });
              }
            },
            fail: () => { },
            complete: () => { }
          });
        } else {
          wx.showModal({
            title: '授权失败',
            icon: 'none'
          });
          wx.navigateBack({
            delta: 1
          });
        }
      },
      complete: () => { }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapContext = wx.createMapContext('mapId');
  },

  // 将地图中心移动到自身当前定位点
  moveToLocation: function () {
    this.mapContext.moveToLocation();
  },

  // 点击标记返回marker的Id
  bindMarkerTap(e) {
    console.log("点击了")
  },

  // 拖动地图回调
  bindRegionChange: function (res) {
    console.log(res, "res")
    var that = this;
    if (res.type == "end") {
      that.getCenterLocation();
    }
  },

  // 获取当前中心位置
  getCenterLocation: function () {
    var that = this;
    this.mapContext.getCenterLocation({
      success: (result) => {
        // wx.openLocation({
        //   latitude: result.latitude,
        //   longitude: result.longitude,
        //   scale: 28,
        // });
        console.log(result.longitude, "拖动地图经度");
        console.log(result.latitude, "拖动地图纬度");
      },
      fail: (err) => { console.log(err.message, "当前拖动失败") },
      complete: () => { }
    });
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