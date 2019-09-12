Component({
    properties:{
        userInfo: Object
    },
    data:{
    },
    methods:{
        getUserInfo(){
            console.log("获取用户资料...");
            this.setData({
                userInfo:{
                    _id:"aaaa-bbbb-cccc",
                    name:"大漠穷秋",
                    title:"飞碟探索工程师",
                    cellphone:"13013000000",
                    companyName:"仙女座科技有限公司"
                }
            });
        }
    },
    ready() {
        this.getUserInfo();
    }
})