<template>
  <div class="Home">
    <van-nav-bar title="首页" />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="this.windowWidth * 0.52"
      lazy-render
    >
      <van-swipe-item v-for="image in banner" :key="image.amc">
        <a :href="image.link">
          <img :src="image.image" style="height: 100%" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <RecommendView :c_recommend="this.recommend"></RecommendView>
  </div>
</template>

<script>
import { getHomeMutilData } from "@/network/home.js";
import { getWindowSize } from "@/API/common/getWindowSize.js";

import RecommendView from "./childComps/RecommendView.vue";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },
  created() {
    this.getHomeData();
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = getWindowSize();
    };
  },
  watch: {},
  methods: {
    async getHomeData() {
      const { data } = await getHomeMutilData();
      console.log(data);
      this.banner = data.banner.list;
      this.recommend = data.recommend.list;
    },
  },
  components: {
    RecommendView,
  },
};
</script>

<style lang="less" scoped>
.Home {
  padding-bottom: 50px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
</style>