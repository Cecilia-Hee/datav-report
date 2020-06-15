<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '@/components/TopView/index'
import SalesView from '@/components/SalesView/index'
import BottomView from '@/components/BottomView/index'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView   
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
