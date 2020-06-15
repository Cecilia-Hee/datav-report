<!--
 * @Author: Helijun
 * @Date: 2020-06-12 17:10:50
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 16:13:52
 * @Description: 
--> 
<template>
  <div class="total-users">
    <common-card title="累计用户数" val="1,087,503">
      <template>
        <!-- <div id="totalUsersCharts" class="chart"></div> -->
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template slot="footer">
        <div class="total-users-footer">
          <div class="compare">
            日同步：
            <span class="emphasis">5.93%</span>
            <span class="increase"></span>
          </div>
          <div class="compare">
            月同步：
            <span class="emphasis">5.93%</span>
            <span class="decrease"></span>
          </div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from "../../mixins/commonCardMixins";
export default {
  mixins: [commonCardMixins],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "value",
          show: false
        },
        yAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            data: ["200"],
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              color: "yellowgreen"
            }
          },
          {
            data: ["300"],
            type: "bar",
            stack: "总量",
            itemStyle: {
              color: "#eee"
            }
          },
          {
            data: ["200"],
            type: "custom",
            stack: "总量",
            renderItem: function(params, api) {
              // console.log(params, api);
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              console.log(endPoint);
              return {
                type: "group",
                position: endPoint, //  绘制的坐标
                children: [
                  {
                    type: "path", // 表示用svg绘制, 可以去iconfont中去找各种图标的svg
                    shape: {
                      d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z", // svg图标的样式
                      x: -10,
                      y: 2, // 坐标
                      width: 20,
                      height: 20,
                      layout: "cover" // 按照定制的width和height进行宽高的填充
                    },
                    style: {
                      fill: "yellowgreen"
                    }
                  },
                  {
                    type: "path", // 表示用svg绘制
                    shape: {
                      d:
                        "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z", // svg图标的样式
                      x: -10,
                      y: -22, // 坐标
                      width: 20,
                      height: 20,
                      layout: "cover"
                    },
                    style: {
                      fill: "yellowgreen"
                    }
                  }
                ]
              };
            }
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .compare {
    margin-right: 20px;
  }
}
</style>