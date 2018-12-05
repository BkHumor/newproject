<template>
<div>
  <h1 class="pull-left kxlogo"><img src="https://www.kanxue.com/view/img/newhome3/kanxuelogo.png"></h1>
  <el-menu :default-active="activeIndex" class="el-menu-demo pull-right menulist" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">项目</el-menu-item>
    <el-menu-item index="3">开发者</el-menu-item>
    <el-menu-item index="4" disabled>消息中心</el-menu-item>
    <el-submenu index="5">
      <template slot="title">帮助</template>
      <el-menu-item index="5-1">常见问题</el-menu-item>
      <el-menu-item index="5-2">我是需求方</el-menu-item>
      <el-menu-item index="5-3">我是发布方</el-menu-item>
    </el-submenu>
  </el-menu>
  <h1 class="pull-right loginmenu" @click="goLogin()">登录</h1>
<div class="clearfloat"></div>
</div>
</template>

<script>

export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      
      handleSelect(key, keyPath) {

        if(key ==1) {
          this.$router.replace('/'); 
        } else if(key == 2) {
          this.$router.push('projects');
        } else if(key == 3) {
          this.$router.push('developer');
        }

      },
      goLogin() {
        this.$router.push('login');

      },
      goLogout() {

      },


    }
}
</script>

<style>
.kxlogo {
  width:20%;
  text-align: center;
}
.menulist{
  width: 60%;
  text-align: right;
}
.loginmenu {
    width:20%;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
}
</style>
