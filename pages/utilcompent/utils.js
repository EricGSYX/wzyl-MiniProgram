function getUserLocation() {
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
}

function getLocationHandle(userLocation) {
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
}

module.exports={
    getUserLocation: getUserLocation,
    getLocationHandle: getLocationHandle
}