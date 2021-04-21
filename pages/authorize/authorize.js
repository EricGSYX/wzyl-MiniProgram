//获取应用实例
const app = getApp()

Page({
  data: {
    // 判断小程序的API，回调，参数，组件等用户信息是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: '',
    code: '',
    openId: ''
  },

  // onLoad: function () {
  //   var that = this;
  //   // 查看是否授权
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             console.log("userInfo=>:",res.userInfo);
  //             that.setData({
  //                 userInfo : res.userInfo
  //             })
  //             // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
  //             // 根据自己的需求有其他操作再补充
  //             // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
  //             wx.login({
  //               success: res => {
  //                 // 获取到用户的 code 之后：res.code
  //                 console.log("code=>" + res.code);
  //                 that.setData({
  //                   code : res.code
  //                 })
  //                 // 可以传给后台，再经过解析获取用户的 openid 或者调用微信提供的接口获取openId
  //                 wx.request({
  //                     // 需要微信的 APPID 和 SECRET
  //                     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx5dcb1b4a68e7bf01&secret=79d33ad90103c0de2a2384978df1c101&js_code=' + res.code + '&grant_type=authorization_code',
  //                     success: res => {
  //                         // 获取到用户的 openid
  //                         console.log("openid=>" + res.data.openid);
  //                         that.setData({
  //                           openId : res.data.openid
  //                         })
  //                         // 由于tabbar页面如果指定了首页 navigateTo和redirectTo都不能跳转页面 可以用switchTab
  //                         wx.switchTab({
  //                           url: '/pages/index/index',
  //                         });
  //                     }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       } else {
  //         // 用户没有授权
  //         // 改变 isHide 的值，显示授权页面
  //         that.setData({
  //           isHide: true
  //         });
  //       }
  //     }
  //   });
  // },

  onLoad: function (options) {
    // if (this.data.openId) {
    //   console.log("onLoad=>",this.data.openId)
    //   wx.switchTab({
    //     url: '/pages/index/index',
    //   });
    // }

    var that = this;
    //查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了userInfo=>", res.authSetting['scope.userInfo'])
          wx.switchTab({
            url: '/pages/index/index',
          });
        } else {
          //用户没有授权
          console.log("用户没有授权");
        }
      }
    });
  },

  bindGetUserInfo: function (res) {
    console.log("res=>", res);
    if (res.detail.userInfo) {
      // 用户允许授权
      var that = this;
      // 获取到用户的信息了，打印到控制台
      console.log("用户的信息：", res.detail.userInfo);
      // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
      wx.showModal({
        title: '文智云旅申请获取以下权限',
        content: '获得你的公开信息(昵称，头像等)',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if (result.confirm) {
            wx.switchTab({
              url: '/pages/index/index',
            });
          } else if (result.cancel) {
            wx.navigateBack({
              delta: 1
            });
          }
        },
        fail: () => {
        },
        complete: () => { }
      });
    }
    else {
      // 用户拒绝授权
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },


  // bindGetUserInfo: function (e) {
  //   if (e.detail.userInfo) {
  //     // 用户确认授权
  //     var that = this;
  //     // 获取到用户的信息了，打印到控制台
  //     console.log("userInfo=>",e.detail.userInfo);
  //     // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
  //     that.setData({
  //       isHide: false
  //     });
  //   } else {
  //     // 用户拒绝授权
  //     wx.showModal({
  //       title: '警告',
  //       content: '您已经拒绝授权，将无法进入小程序，请授权之后再进入!',
  //       showCancel: false,
  //       confirmText: '返回授权',
  //       success: function (res) {
  //         // 用户没有授权成功，不需要改变 isHide 的值
  //         if (res.confirm) {
  //           console.log('用户点击了“返回授权”');
  //         }
  //       }
  //     });
  //   }
  // },
})
