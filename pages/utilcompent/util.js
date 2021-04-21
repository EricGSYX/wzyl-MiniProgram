const requestUrl = ({
    url,
    params,
    success,
    method="post"
})=>{
    wx.showModal({
        title: '加载中',
    });
    let server = 'https://xkqhgxunzc.720yun.com';
    let sessionId = wx.getStorageSync("sid");
    that= this;
    if (sessionId!=""&&sessionId!=null) {
        var header = {'content-type':'application/x-www-form-urlencoded','Cookie':'sid='+sessionId};
    }else{
        var header = {'content-type':'application/x-www-form-urlencoded'};
    }
    return new Promise((resolve,reject)=>{
        wx.request({
            url: server+url,
            data: params,
            header: header,
            method: method,
            success: (result)=>{
                wx.hideLoading();
                if (sessionId =="" && sessionId==null) {
                    wx.setStorageSync("sid", result.data.info.sessionId);
                }
                if (result['statusCode'==200]) {
                    // 异步成功之后执行的函数
                    resolve(result)
                } else {
                    wx.showModal({
                        title: result.data.msg||'请求出错',
                        icon : 'none',
                        duration : 2000,
                        mask :true
                    });
                    reject(result.ErrorMsg);
                }
            },
            fail: (res)=>{
                wx.hideLoading();
                wx.showModal({
                    title: result.data.msg||'',
                    icon : 'none',
                    duration : 2000,
                    mask :true
                });
                reject("网络出错");
            },
            complete: ()=>{
                wx.hideLoading();
            }
        });
    })
}
module.exports={
    requestUrl : requestUrl
}