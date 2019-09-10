Page({
    data: {    },
    onLoad: function () {
        
    },
    toEditMain(e){
        wx.navigateBack({
            delta: 1
        });
    }
})