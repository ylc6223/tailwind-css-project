<template>
  <div class="container">
    <notify />
    <div class="box flex shrink-0 p-6">弹性盒子-收缩比率-padding</div>
    <div class="box max-w-sm mx-auto">max-width-水平居中</div>
    <div class="box-s bg-blue-700 rounded-xl shadow-lg">背景颜色-边框圆角-阴影尺寸</div>
    <p class="text-xl font-medium text-black">字体大小-文本颜色-字体粗细</p>
    <p class="text-slate-500">蓝灰色字体</p>
    <router-link class="text-blue-600" :to="{ name: 'View1' }">view1</router-link>
  </div>
</template>

<script>
import Notify from '../components/Notify.vue'
export default {
  name: 'Home',
  components: {
    Notify,
  },
}
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid;
  background-color: #fc5c65;
  background-clip: content-box;
}
.box-s {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: #fc5c65;
  background-clip: content-box;
}
</style>
