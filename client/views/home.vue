<template>
  <div class="home">
    <Button v-on:click="counter++">{{ counter }}</Button>
    <div class="webpack"></div>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.home {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.home {
  // background-color: orangered;
}
.webpack {
  background-image: url("@/client/assets/img/webpack.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 400px;
  height: 400px;
  border: 1px solid #eee;
}
</style>