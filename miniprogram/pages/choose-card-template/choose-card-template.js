Page({
    data:{
        loading:true
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
    toEditMain(e){
        wx.navigateBack({
            delta: 1
        });
    }
})