Component({
    properties:{
        userId:String
    },
    data:{
        loading:true
    },
    methods:{
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
        }
    },
    ready() {
        this.loadData();
    }
})