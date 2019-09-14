const app = getApp()

Page({
  data: {
    hasLoggedIn:true,
    userInfo:{},
    statData:{
      visitors_today:0,
      visitors_total:0,
      customers:0,
      msg_today:0
    },
    cardInfo:{}
  },
  onLoad(){
    let that=this;
    const db=wx.cloud.database();
    const _=db.command;

    app.callbacks.push((userInfo)=>{
      this.setData({
        userInfo:userInfo
      });
    });

    app.callbacks.push((userInfo)=>{
      db.collection("statistics-first-page")
        .where({
          userId:userInfo._id
        })
        .limit(1)
        .get({
          success:function(res){
            if(res&&res.data&&res.data.length){
              that.setData({
                statData:res.data[0]
              });
            }
          },
          fail:function(event){
            console.error(event);
          }
        })
    });

    app.callbacks.push((userInfo)=>{
      db.collection("card-items")
        .where({
          userId:userInfo._id
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
    });
  },
  onShow(e){
  },
  toSearch(e){
  },
  toDetail(e){
    wx.navigateTo({
      url: "../card-detail/card-detail"
    });
  },
  toEdit(e){
    wx.navigateTo({
      url: "../edit-main/edit-main"
    });
  },
  toShare(e){
    wx.navigateTo({
      url: "../share-main/share-main"
    });
  },
  scanCode(e){
      wx.scanCode({
          success (res) {
              console.log(res)
          }
      });
  },
  mpAlert(e){
    wx.showToast({
      title: 'Coming soon ...',
      icon: 'success',
      duration: 2000
    })
  }
})
