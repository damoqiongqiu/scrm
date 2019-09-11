const app = getApp()

Page({
  data: {},
  onReady:function(){
  },
  handleTap: function(evt) {
    console.log(evt);
  },
  mpAlert(e){
    wx.showToast({
      title: 'Coming soon ...',
      icon: 'success',
      duration: 2000
    })
  }
})
