Component({
    properties:{
        userId:String
    },
    data:{
        userInfo: Object
    },
    methods:{
        getUserInfo(){
            console.log("获取用户资料...");
            this.setData({
                userInfo:{
                    name:"大漠穷秋",
                    title:"飞碟探索工程师",
                    cellphone:"13013000000",
                    company:"仙女座科技有限公司"
                }
            });
        }
    },
    ready() {
        this.getUserInfo();
    }
})