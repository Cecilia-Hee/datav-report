<!--
 * @Author: Helijun
 * @Date: 2020-06-12 17:10:50
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 10:29:51
 * @Description: 
--> 
<template>
  <div class="total-sales">
    <common-card
      title="累计销售额" 
      val="￥ 91,065,638"
    >
    <template>
      <div class="compare">
        日同比 
        <span class="emphasis">203.55%</span>
        <span class="increase"></span>
      </div>
      <div class="compare">
        月同比 
        <span class="emphasis">283.55%</span>
        <span class="decrease"></span>
      </div>
    </template>

    <template slot="footer">
      <span>昨日销售额 </span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>

    </common-card>
  </div>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
export default {
  mixins: [commonCardMixins],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
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