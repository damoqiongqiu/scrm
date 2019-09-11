Component({
    properties:{
        userId:String
    },
    data:{
        loading:true,
        relations:[]
    },
    methods:{
        loadData(){
            let that=this;
            const db=wx.cloud.database();
            const _=db.command;
            db.collection("actions")
                .where({
                    toUser:{
                        _id:"2"
                    }
                })
                .limit(10)
                .orderBy("time","desc")
                .get({
                    success:function(res){
                        console.log(res);
                        that.setData({
                            loading:false,
                            relations:[...res.data]
                        });
                    },
                    fail:function(event){
                        console.error(event);
                    }
                });
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