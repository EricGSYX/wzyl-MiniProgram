//获取应用实例
const app = getApp()
var map = [

  {
    "fId": "1",
    "name": "风景",
    "scale": 12,
    "latitude": "30.154595",
    "longitude": "118.157848",
    "iconPath": "/static/images/旅游.png",
    "data": [
      {
        "name": "黄山风景区",
        id: 0,
        "latitude": "30.154595",
        "longitude": "118.157848",
        "iconPath": "/static/images/旅游.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "黄山风景区",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      }
    ]
  },
  {
    "fId": "2",
    "name": "娱乐",
    "scale": 15,
    "latitude": "30.111208",
    "longitude": "118.171591",
    "iconPath": "/static/images/娱乐场所.png",
    "data": [
      {
        "name": "索道",
        id: 0,
        "latitude": "30.111208",
        "longitude": "118.171591",
        "iconPath": "/static/images/娱乐场所.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "索道",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      }
    ]
  },
  {
    "fId": "3",
    "scale": 15,
    "name": "售票",
    "latitude": "30.135533",
    "longitude": "118.158063",
    "iconPath": "/static/images/门票.png",
    "data": [
      {
        "name": "观光缆车售票处",
        id: 0,
        "latitude": "30.135533",
        "longitude": "118.158063",
        "iconPath": "/static/images/门票.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "观光缆车售票处",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      },
    ]
  },
  {
    "fId": "4",
    "name": "商店",
    "scale": 18,
    "latitude": "30.132230",
    "longitude": "118.168743",
    "iconPath": "/static/images/店铺_icon.png",
    "data": [
      {
        "name": "风景区商店",
        id: 0,
        "latitude": "30.132230",
        "longitude": "118.168743",
        "iconPath": "/static/images/店铺_icon.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "风景区商店",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      },
    ]
  },
  {
    "fId": "5",
    "scale": 15.2,
    "name": "酒店",
    "latitude": "30.131446",
    "longitude": "118.165980",
    "iconPath": "/static/images/酒店.png",
    "data": [
      {
        "name": "黄山白云宾馆",
        id: 0,
        "latitude": "30.131446",
        "longitude": "118.165980",
        "iconPath": "/static/images/酒店.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "黄山白云宾馆",
          bgColor: "#1297DB",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      },
    ]
  },
  {
    "fId": "6",
    "scale": 15.2,
    "name": "车站",
    "latitude": "30.117097",
    "longitude": "118.193021",
    "iconPath": "/static/images/大巴汽车-10.png",
    "data": [
      {
        "name": "云谷寺换乘点",
        "latitude": "30.117097",
        "longitude": "118.193021",
        "iconPath": "/static/images/大巴汽车-10.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "云谷寺换乘点",
          bgColor: "#FFFFFF",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      },
    ]
  },
  {
    "fId": "7",
    "name": "出口",
    "scale": 15.3,
    "latitude": "30.147405",
    "longitude": "118.112002",
    "iconPath": "/static/images/门.png",
    "data": [
      {
        "name": "西门",
        id: 0,
        "latitude": "30.147405",
        "longitude": "118.112002",
        "iconPath": "/static/images/门.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "西门",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          ""
        ],
        "description": ""
      },
    ]
  },
  {
    "fId": "8",
    "name": "饭店",
    "scale": 15.3,
    "latitude": "30.140246",
    "longitude": "118.165657",
    "iconPath": "/static/images/饭店.png",
    "data": [
      {
        "name": "黄山西海饭店",
        id: 0,
        "latitude": "30.140246",
        "longitude": "118.165657",
        "iconPath": "/static/images/饭店.png",
        "width": "50",
        "height": "50",
        callout: {
          padding: 2,
          content: "黄山西海饭店",
          bgColor: "#FFFFFf",
          color: "#000000",
          fontSize: 12,
          borderRadius: 100,
          display: "ALWAYS"
        },
        "img": [
          "/static/images/a71ea8d3fd1f4134292f5403d47734ccd1c85e26.png"
        ],
        "description": ""
      },
    ]
  }
]

Page({
  data: {
    // 云开发数据
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    latitude: 30.154701,
    longitude: 118.157986,
    scale: 15.4,
    // 封装的地图参数
    buildlData: map,
    // 导航栏下标
    navbarActiveIndex: 0,
    isSelectedBuild: 0,
    isSelectedBuildType: 0,
    islocation: true,
    focusPointId: "",
    isChecked: true,
    currentItemId: "1",
    navbar: ['停车场', '酒店', '饭店', '路线规划'],
    mark: [{}],
    markerId: '',
    currentTab: 0,
    // 展示弹窗
    showDialog: true,
    // 是否播放
    isPlay: false,
    // 开始时间
    currentTime: '00.00',
    // 最后时间
    lastTime: '03.11',
    // 给查看详情绑定一个值
    isButton: false,
    // 起始位置
    startAddress : {},
    // 终点位置
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
   * 点击导航栏
   * @param {navbarActiveIndex} event 当前点击的navbar的index
   */
  onNavBarTap: function (event) {
    console.log("点击了")
    // 获取点击的navbar的index
    let navbarActiveIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex
    })
  },

  // /**
  //  * 导航滑动事件
  //  */
  // onBindAnimationFinish: function ({ detail }) {
  //   // 设置data属性中的navbarActiveIndex为当前点击的navbar
  //   this.setData({
  //     navbarActiveIndex: detail.current
  //   })
  // },

  // 判断用户是否授权
  getUserLocation: function () {
    wx.getSetting({
      success: (result) => {
        // 拒绝授权后再次进入重新授权
        console.log("授权与否", result.authSetting['scope.userLocation'])
        if (result.authSetting['scope.userLocation'] != undefined && result.authSetting['scope.userLocation'] != true) {
          // 进到这里说明getLocationHandle()取反后，不再是undefined 且它为false 
          console.log("1=>", result.authSetting['scope.userLocation'])
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
                console.log("确认")
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
        } else if (result.authSetting['scope.userLocation'] != undefined) {
          console.log("2=>", result.authSetting['scope.userLocation'])
          this.getLocationHandle();
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },

  // 用户点击授权
  getLocationHandle: function (userLocation) {
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
          console.log("4=>", userLocation)
          console.log("4=>", !userLocation)
          console.log("5=>", userLocation.authSetting['scope.userLocation'])
          console.log("5=>", !userLocation.authSetting['scope.userLocation'])
          // 取反之后调用getUserLocation()
          this.getUserLocation();
        }
      },
      complete: () => { }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 获取用户信息
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    this.getUserLocation();
    this.getLocationHandle();
  },
  // 调用云函数
  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid

      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  // 定位当前位置
  position: function () {
    console.log("定位当前位置")
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          scale: 16.4,
          longitude: res.longitude
        })
        // console.log(res.latitude)
        // console.log(res.longitude)
      }
    })
  },
  // 展示景区标志点
  changePage: function (event) {
    this.setData({
      showDialog: true
    })
    console.log("展示标记点")
    // console.log("changePage()")
    this.setData({
      currentItemId: event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num - 1,
      longitude: map[event.currentTarget.dataset.num - 1].longitude,
      latitude: map[event.currentTarget.dataset.num - 1].latitude,
      scale: 16,
    });
  },
  // 点击景区图标跳转到对应页面
  markertap(res) {
    console.log("点击了景区图标")
    // console.log("res=>",res)
    var mark = res.currentTarget.dataset.num;
    var markerId = res.detail.markerId;
    this.toggleDialog();
    this.setData({
      mark,
      markerId
    })
  },

  // 地图上方导航栏
  navBarTap: function (params) {
    console.log("导航栏切换")
    this.setData({
      currentTab: params.currentTarget.dataset.idx
    })
  },

  /**
   * 控制弹窗的打开关闭
   * 1: 点击弹窗以外的位置可以消失弹窗
   * 2: 用到弹窗和关闭弹窗的业务逻辑时都可调用
   */
  toggleDialog() {
    console.log("取消了弹窗")
    this.setData({
      showDialog: !this.data.showDialog
    })
  },

  /**
   * 点击播放/暂停音频
   */
  onPlayAudio() {
    this.setData({
      isPlay: !this.data.isPlay
    })
  },

  /**
   * 导航去这里
   */
  onGotoThere() {
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
   * 查看详情
   */
  onMoreInformation(res) {
    console.log("res=>",res)
    var mark = res.currentTarget.dataset.num;
    var markerId = res.currentTarget.dataset.num[0].id;
    // console.log("拿到的mark",mark)
    // console.log("拿到的markerId",markerId)
    // 作用是把数组转变成可以在网页传递中的参数进行传递
    let temp = JSON.stringify(mark[markerId])
    wx.navigateTo({
      url: "/pages/info/info?mar=" + temp,
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
