// ajax请求
import config from './config';
export default (url, data = {}, method = "GET") => {
    return new Promise((resolve, reject) => {
        var reqTask = wx.request({
            // 如果需要真机体验 换成uTools工具搭建的外网地址mobileHost
            url: config.host + url,
            data,
            header: { cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1) : '' },
            method,
            success: (result) => {
                // 判断登录请求
                if (data.isLogin) {
                    // 将用户的cookie存储到本地
                    wx.setStorage({
                        key: 'cookies',
                        data: result.cookies,
                    });
                }
                resolve("resuslt_data=>", result.data);
            },
            fail: (err) => {
                console.log("请求失败=>", err);
                reject(err);
            },
            complete: () => { }
        });
    })
}