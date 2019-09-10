Page({
    data: {
    },
    onLoad: function () {
        
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