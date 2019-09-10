let base64 = require("../../assets/images/base64");

Component({
    properties:{
        userId:String
    },
    data:{
        userInfo: Object,
        action:Object
    },
    methods:{
        getIcon(){
            this.setData({
                icon20: base64.icon20,
                icon60: base64.icon60
            });
        },
        getUserInfo(){
            console.log("获取主体资料...");
            this.setData({
                userInfo:{
                    name:"大漠穷秋",
                    title:"飞碟探索工程师",
                    cellphone:"13013000000",
                    company:"仙女座科技有限公司"
                }
            });
        },
        getAction(){
            console.log("获取消息...");
            this.setData({
                action:{
                    time:"2019/09/08",
                    msg:"访问了你的名片"
                }
            });
        }
    },
    ready() {
        this.getIcon();
        this.getUserInfo();
        this.getAction();
    }
})