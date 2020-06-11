<template>
  <div class="home">
    <top-view></top-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '@/components/TopView/index'
export default {
  name: 'Home',
  components: {
    TopView
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
