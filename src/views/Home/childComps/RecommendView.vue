<template>
  <div class="RecommendView">
    <van-row justify="space-around">
      <van-col
        :span="24 / c_recommend.length"
        v-for="item in c_recommend"
        :key="item.sort"
      >
        <a :href="item.link">
          <van-image round width="8rem" height="8rem" :src="item.image" />
          <p>{{ item.title }}</p>
        </a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    c_recommend: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.RecommendView {
  padding: 10px 0 15px;
  border-bottom: 10px solid #efefef;
  .van-row {
    text-align: center;
    p {
      margin-top: 5px;
    }
  }
}
</style>