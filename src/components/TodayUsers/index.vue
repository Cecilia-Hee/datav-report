<!--
 * @Author: Helijun
 * @Date: 2020-06-12 17:10:50
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 17:57:26
 * @Description: 
--> 
<template>
  <div class="total-sales">
    <common-card
      title="今日交易用户数"
      val="1,675,376"
    >
      <template>
        <v-chart :options="getOptions()"></v-chart>
      </template>

      <template slot="footer">
        <span>退货率 </span>
        <span class="emphasis">5.93%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
export default {
  mixins: [commonCardMixins],
  methods: {
    getOptions() {
      return {
        tooltip: {},
        xAxis: {
          show: false,
          type: 'category',
          data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00']
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          data: [100,210,100,200,330,220,90,100,80,200],
          barWidth: '60%',
          color: ['#3398DB'],
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style>

</style>