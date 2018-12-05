<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in bannerlist" :key="item">
      <img :src="item.img" alt="" style="width:100%">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data() {
        return {
            bannerlist:[]
        }
    },
    created() {
        let self = this;
        this.$http({
            method: 'get',
            url: 'advertisement-1.htm',
        }).then((res)=> {
            //banner
            if(res.data.code == 0) {
                let bannerlist = res.data.message[1].banner;
                self.bannerlist = bannerlist;
            } else {

            }
        }).catch((err)=> {

        });
    }

}
</script>


<style>
  .el-carousel__item img {
    line-height: 400px;
    margin: 0;
  }
</style>