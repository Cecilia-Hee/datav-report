<!--
 * @Author: Helijun
 * @Date: 2020-06-12 17:10:50
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 16:20:22
 * @Description: 
--> 
<template>
  <div class="total-orders">
    <common-card title="累计订单量" val="5,370,258">
      <template>
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template slot="footer">
        <span>昨日订单量</span>
        <span class="emphasis">2,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from "../../mixins/commonCardMixins";
export default {
  mixins: [commonCardMixins],
  data() {
    return {};
  },
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [
              123,
              1234,
              243,
              2243,
              243,
              256,
              334,
              1234,
              432,
              443,
              488,
              432
            ],
            type: "line",
            smooth: true,
            areaStyle: {
              color: "purple"
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            }
          }
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      };
    }
  }
};
</script>

<style>
</style>