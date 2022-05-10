<template>
  <div class="about">
    <img :src="photos[0].src" :alt="photos[0].alt" width="100%"/>
  </div>
</template>
<script>
const photos = [
  {
    src: require("../assets/img/webpack.jpg").default,
    alt: "webpack",
  },
];
export default {
  name: "About",
  components: {},
  data() {
    return {
      photos: photos,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.about {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.about {
  background: orange;
}
</style>