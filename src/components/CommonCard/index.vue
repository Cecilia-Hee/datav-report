<!--
 * @Author: Helijun
 * @Date: 2020-06-11 18:54:19
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 13:22:58
 * @Description: 
--> 
<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{val}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    val: [String, Number]
  }
}
</script>

<style lang="scss" scoped>
.common-card {
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    color: #666;
    font-size: 12px;    
  }
}

</style>

<style lang="scss">
  .emphasis {
        color: #333;
        margin-left: 5px;
        font-weight: 700;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
    margin-bottom: 3px;
    .increase, .decrease {
      width: 0;
      height: 0;
      border-width: 3px;
      border-style: solid;
    }
    .increase {
      border-color: transparent transparent red transparent;
      margin: 0 0 3px 5px;
    }
    .decrease {
      border-color: green transparent transparent transparent;
      margin: 3px 0 0 5px;
    }
  }
</style>