Page({
    data: {
    },
    onLoad: function () {
        
    },
    toDetail(e){
        wx.navigateTo({
            url: "../card-detail/card-detail"
        });
    }
})