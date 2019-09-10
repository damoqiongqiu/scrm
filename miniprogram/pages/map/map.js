Page({
    data: {
        longitude: 113.324520,
        latitude: 23.099994,
        markers:[{
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            width: 2,
            dottedLine: true
        }],
        controls: [
            {
                id: 1,
                iconPath: '/resources/location.png',
                position: {
                    left: 0,
                    top: 300 - 50,
                    width: 50,
                    height: 50
                },
                clickable: true
            }
        ]
    },
    onLoad: function () {
        let that = this;
        wx.getLocation({
            type: "wgs84",
            success: function(res){
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers:[{
                        latitude: res.latitude,
                        longitude: res.longitude
                    }]
                })
            }
        })
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    navigateBack(e){
        wx.navigateBack({
            delta: 1
        })
    }
})