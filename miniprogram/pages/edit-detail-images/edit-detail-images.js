Page({
    data: {
        images: []
    },
    onLoad: function () {
        
    },
    toEditMain(e){
        wx.navigateBack({
            delta: 1
        });
    },
    chooseImage(e) {
        wx.chooseImage({
            sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
            success: res => {
                const images = this.data.images.concat(res.tempFilePaths);
                this.data.images = images.length <= 3 ? images : images.slice(0, 3);
            }
        })
    }
})