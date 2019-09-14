Component({
    properties:{
        userId: String
    },
    data:{
        cardInfo:{}
    },
    methods:{
        getCardDetail(){
            let that=this;
            const db=wx.cloud.database();
            const _=db.command;
            db.collection("card-items")
                .where({
                    userId:this.properties.userId
                })
                .limit(1)
                .get({
                    success:function(res){
                        if(res&&res.data&&res.data.length){
                            that.setData({
                                cardInfo:res.data[0]
                            });
                        }
                    },
                    fail:function(event){
                        console.error(event);
                    }
                });
        }
    },
    ready() {
        this.getCardDetail();
    }
})