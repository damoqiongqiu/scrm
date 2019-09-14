const app = getApp();

Page({
    data: {
        userId:"",
        cardDetails:{}
    },
    loadCardDetails:function(){
        let that=this;
            const db=wx.cloud.database();
            const _=db.command;
            db.collection("card-details")
                .where({
                    userId:this.data.userId
                })
                .limit(1)
                .get({
                    success:function(res){
                        if(res&&res.data&&res.data.length){
                            that.setData({
                                cardDetails:res.data[0]
                            });
                        }
                    },
                    fail:function(event){
                        console.error(event);
                    }
                });
    },
    onLoad: function () {
        this.setData({
            userId:app.globalData.userInfo._id
        });
        this.loadCardDetails();
    },
    toEdit(e){
        wx.navigateTo({
            url: "../edit-main/edit-main"
        });
    },
    makeCall(e){
        wx.makePhoneCall({
            phoneNumber: '13013000000'
        })
    },
    scanCode(e){
        wx.scanCode({
            success (res) {
                console.log(res)
            }
        });
    }
})