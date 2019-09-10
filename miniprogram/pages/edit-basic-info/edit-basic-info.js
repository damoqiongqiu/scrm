Page({
    data: {
        address:""
    },
    onLoad: function () {

    },
    toEditMain(e){
        wx.navigateBack({
            delta: 1
        });
    },
    chooseLocation(e){
        let that=this;
        wx.getLocation({
            type: "gcj2",
            success: function(res){
                wx.chooseLocation({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    success:function(res){
                        console.log(res);
                        that.setData({
                            address:res.address
                        });
                    }
                })
            }
        });
    }
})