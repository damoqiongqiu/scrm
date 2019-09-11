Page({
    data: {  
        imgSrc:""
    },
    onLoad: function () {
        
    },
    chooseImg(e){
        let that=this;
        wx.showActionSheet({
            itemList: ['拍摄', '从相册选择'],
            success (res) {
                if(res.tapIndex==0){
                    wx.chooseImage({
                        count: 1,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['camera'],
                        success (res) {
                            const tempFilePaths = res.tempFilePaths
                            console.log(tempFilePaths);
                            that.setData({
                                imgSrc:tempFilePaths
                            });
                        }
                    });
                }else if(res.tapIndex==1){
                    wx.chooseImage({
                        count: 1,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album'],
                        success (res) {
                            const tempFilePaths = res.tempFilePaths
                            console.log(tempFilePaths);
                            that.setData({
                                imgSrc:tempFilePaths
                            });
                        }
                    });
                }
            },
            fail (res) {
                console.log(res.errMsg)
            }
        })
    }
})