<template>
    <div class="outer_box" :style="outer_box">
      <nav-view></nav-view>
      <carousel></carousel>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      outer_box: {
          position:"absolute",
          top:"0px",
          left:"0px",
          width: "100%",
          height:"100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
      },
    }
  },
  components:{
      Carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
