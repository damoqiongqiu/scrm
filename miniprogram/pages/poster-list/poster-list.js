Page({
    data: {
        loading:true,
        imgArr:[
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
        ]
    },
    onLoad: function () {
        this.loadData();
    },
    loadData(){
        let that=this;
        console.log("正在加载数据...");
        setTimeout(()=>{
            that.setData({
                loading:false
            });
        },2000);
    },
    loadMore(){
        console.log("下拉加载更多...");
        this.loadData();
    },
    previewImg:function(e){
        console.log(e.currentTarget.dataset.index);
        var index = e.currentTarget.dataset.index;
        var imgArr = this.data.imgArr;
        wx.previewImage({
            current: imgArr[index],
            urls: imgArr,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    }
})