const app = getApp()

Page({
  data: {
    hasLoggedIn:true,
    userInfo:{}
  },
  onLoad(){
      app.userInfoReadyCallback=(userInfo)=>{
        this.setData({
          userInfo:userInfo
        });
      };
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
