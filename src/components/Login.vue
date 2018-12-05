<template>

<div class = "outer_box" :style = "outer_box">
 <nav-view></nav-view>
 <bg-view></bg-view>
<div class = "loginFrame">
<el-form ref = "AccountForm" class = "demo-ruleForm login-container">
 
       <!--tab标签-->
    <div class = "tabsUser">
    <el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users" style = "height: 30px;font-size: 25px">
        <el-tab-pane label = "密码登录" name = "psw_login" class = "tab1"></el-tab-pane>
        <el-tab-pane label = "手机登录" name = "phone_login" class = "tab2"></el-tab-pane>
        <el-tab-pane label = "微信登录" name = "wechat_login" class = "tab3"></el-tab-pane>
    </el-tabs>
    </div>
 
<div class = "formGroup0" v-if="current_active==0">
<el-form-item  label = "" prop = "username" >
    <el-input type = "text"  auto-complete = "off" placeholder = "请输入您的账号" >
        <el-button slot="prepend" icon="iconfont icon-yonghuming"></el-button>  
    </el-input></el-form-item> 
<el-form-item label = "" prop = "password" class = "form-inline">
     
    <el-input type = "password" auto-complete = "off" placeholder = "请输入密码" >
        <el-button slot="prepend" icon="iconfont icon-mima"></el-button>     
    </el-input></el-form-item>
</div>
 
<div class = "formGroup1" v-if="current_active==1">
    <el-form-item label = "" prop = "phone" >
    <el-row class="form-control">
    <el-col :span="24">
        <el-input type = "number" auto-complete = "off" placeholder = "手机号" >
        <el-button slot="prepend" icon="iconfont icon-shouji"></el-button>    
        </el-input>
    </el-col>
    </el-row>
    </el-form-item> 
    
<el-form-item label = "" prop = "vcode">
    <el-col :span="16">
        <el-input  type = "text" auto-complete = "off" placeholder = "请输入验证码" ></el-input>
    </el-col>
     <el-col :span="4"><el-button @click.prevent="sendCode()">发送验证码</el-button></el-col>
    </el-form-item>
</div>

<div class = "formGroup2" v-if="current_active==2">
<el-form-item  label = "微信扫码" prop = "wechat" >
   
</el-form-item>
</div>

<div class = "remFor">
<a href ="'https://blog.csdn.net/Vanadis_outlook/article/details/72823024.html'" class = "forget">忘记密码？</a>
</div>
  
  <div class = "formButton">
<el-form-item style = "width:100%;">
    <el-button type = "primary" style = "width:100%;" >登录</el-button>
</el-form-item>
</div>
    </el-form>
    </div>
    </div>
</template>
 
<script>
export default {
    name: 'Login',
    data() {
        return {
            logining : false,
            outer_box: {
                position:"absolute",
                top:"0px",
                left:"0px",
                width: "100%",
                height:"100%",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            },
            activeName: 'psw_login',
            current_active:0,
            checked: false
           
        };
        
    },
    methods: {
        handleClick(e) {
           this.current_active = e.index;
           this.activeName = e.index == 0 ? 'psw_login' : (e.index == 1 ? 'phone_login' : 'wechat_login');
        }
       
    },
    created() {
        this.$http({
            method: 'get',
            url: 'advertisement-1.htm',
        }).then((res)=> {
            console.log(res);
        }).catch((err)=> {

        });
    },
}
</script>
 
<style scoped>
.formGroup0, .formGroup1, .formGroup2 {
    padding: 0px 16px;
}
.login-container {
    
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   
}
label{
    width:70px;
    text-align:left;
    
    
    }
 

.remember{
    width:250px;
    text-align:left;
 
    
}
.forget{
    width:500px;
    text-align:right;
    font-size:14px;
    font-family:PingFang SC;
    
}
.remFor{
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: right
}
.tabsUser{
    display: inline-block;
    margin-left: 0px;
    margin-right:0px;
    text-align:center;
    font-size:25px;
}
 
 
 
 </style>
