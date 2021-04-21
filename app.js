// app.js
import requestUrl from './pages/utilcompent/util.js'
App({
  onLaunch:function() {

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
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
  globalData: {
    // userInfo: null
  }
})
