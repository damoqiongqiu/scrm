const app = getApp();

Page({
    data: {
        userId:""
    },
    onLoad: function () {
        this.setData({
            userId:app.globalData.userInfo._id
        });
    },
    toEdit(e){
        wx.navigateTo({
            url: "../edit-main/edit-main"
        });
    },
    makeCall(e){
        wx.makePhoneCall({
            phoneNumber: '13013000000'
        })
    },
    scanCode(e){
        wx.scanCode({
            success (res) {
                console.log(res)
            }
        });
    }
})