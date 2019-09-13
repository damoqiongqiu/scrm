/**
 * @author 大漠穷秋
 * @date 2019-09-07 15:42:16
 */
App({
  onLaunch: function () {
    let that=this;
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,//自动跟踪用户
      })
    }

    //必须等wx.cloud.init之后才能调用这些api
    const db=wx.cloud.database();
    const _=db.command;
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    //TODO:重构这里丑陋的回调缩进
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              that.globalData.userInfo = res.userInfo
              that.globalData.userInfo.avatar=res.userInfo.avatarUrl;
              that.globalData.userInfo.creatTime=new Date();

              //TODO:写入或者更新Session

              /**
               * 业务逻辑：
               * 如果能根据openid在自己的数据库中获取到用户信息，则update当前的全局userInfo对象
               * 否则，自动创建一条user记录和一条card记录
               */
              wx.cloud.callFunction({
                  name:'login',
                  complete:res=>{
                      console.log(res);
                      if(!res||!res.result||!res.result.openid){
                        //登录失败
                        console.log("调用失败");
                        return;
                      }
                      that.globalData.userInfo.openid=res.result.openid;
                      db.collection("users")
                        .where({
                            openid:res.result.openid
                        })
                        .limit(1)
                        .get({
                            success:function(res){
                                console.log(res);
                                if(!res||!res.data||!res.data.length){
                                  //没有获取到数据，自动创建一条user记录和一条card记录
                                  console.log("没有获取到数据");
                                  db.collection("users")
                                    .add({
                                      data:that.globalData.userInfo,
                                      success:function(res){
                                        console.log(res);
                                      }
                                    });
                                  db.collection("card-items")
                                    .add({
                                      data:that.globalData.userInfo,
                                      success:function(res){
                                        console.log(res);
                                      }
                                    });
                                }else{
                                  console.log("获取到了用户数据");
                                  //获取到了用户数据，update当前的全局userInfo对象
                                  that.globalData.userInfo=res.data[0];
                                  console.log(that.globalData.userInfo);
                                }

                                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                                // 所以此处加入 callback 以防止这种情况
                                if(that.callbacks&&that.callbacks.length){
                                  that.callbacks.forEach((item,index,array)=>{
                                    item(that.globalData.userInfo);
                                  });
                                }
                            },
                            fail:function(event){
                                console.error(event);
                            }
                        });
                  }
              });
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {}
  },
  callbacks:[]
})
