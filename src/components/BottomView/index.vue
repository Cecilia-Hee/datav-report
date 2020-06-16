<!--
 * @Author: Helijun
 * @Date: 2020-06-15 18:36:00
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-16 13:13:50
 * @Description: 
--> 
<template>
  <div class="bottom-view">
    <el-card class="process-view" shadow="hover">
      <template v-slot:header>
        <div class="title">关键词搜索</div>
      </template>
      <template>
        <div class="chart-wrapper">
          <div class="chart">
            <div class="chart-title">搜索用户数</div>
            <div class="chart-data">100,000</div>
            <div class="chart-main">
              <v-chart :options="getTotalUser()"></v-chart>
            </div>
          </div>
          <div class="chart">
            <div class="chart-title">搜索量</div>
            <div class="chart-data">230,000</div>
            <div class="chart-main">
              <v-chart :options="getTotalUser()"></v-chart>
            </div>
          </div>
        </div>

        <div class="table-wrapper">
          <el-table :data="tableData">
            <el-table-column prop="rank" label="排名" />
            <el-table-column prop="keyword" label="关键词" />
            <el-table-column prop="count" label="总搜索量" />
            <el-table-column prop="users" label="搜索用户数" />
            <el-table-column prop="range" label="搜索占比" />
          </el-table>
          <!-- <el-pagination
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            background
            @current-change="onPageChange"
          />-->
        </div>
      </template>
    </el-card>

    <el-card class="process-view" shadow="hover">
      <template v-slot:header>
        <div class="title">
          分类销售排行
          <div class="radio-wrapper">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="商品"></el-radio-button>
              <el-radio-button label="品类"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </template>

      <template>
        <div class="pie-chart">
          <div class="chart">
            <v-chart :options="categoryOptions"></v-chart>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelect: "商品",
      tableData: [],
      categoryOptions: {}
    };
  },
  mounted() {
    this.renderPieChart();
  },
  methods: {
    getTotalUser() {
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
            type: "line",
            data: [
              "200",
              "300",
              "100",
              "87",
              "200",
              "200",
              "300",
              "100",
              "87",
              "200"
            ],
            areaStyle: {
              color: "rgba(95,187,255,.5)"
            },
            lineStyle: {
              width: 2,
              color: "rgb(95,187,255)"
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 10,
          left: 0,
          right: 0,
          bottom: 0
        }
      };
    },

    renderPieChart() {
      const mockData = [
        {
          legendname: "粉面粥店",
          value: 20,
          percent: "12.8%",
          name: "1/12.8%",
          itemStyle: {
            color: "pink"
          }
        },
        {
          legendname: "包子",
          value: 20,
          percent: "32.8%",
          name: "1/32.8%"
        },
        {
          legendname: "火锅",
          value: 20,
          percent: "42.8%",
          name: "1/42.8%"
        }
      ];
      this.categoryOptions = {
        // title是数组，双标题
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666"
            },
            left: 20,
            top: 20
          },
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.2%",
            y: "43.5%",
            textAlign: "center",
            textStyle: {
              fontSize: 12,
              color: "#666",
              fontWeight: "normal"
            },
            subtextStyle: {
              fontSize: 34,
              color: "#333",
              fontWeight: "bold"
            }
          }
        ],
        series: [
          {
            title: "品类分步",
            type: "pie",
            data: mockData,
            label: {
              normal: {
                show: true,
                position: "outter",
                formatter: function(params) {
                  return params.data.legendname;
                }
              }
            },
            center: ["35%", "50%"], // 圆心的位置
            radius: ["45%", "60%"], // 半径的距离
            labelLine: {
              normal: {
                length: 10,
                length2: 10
                // smooth: true
              }
            },
            clockwise: false,
            itemStyle: {
              // borderWidth: 4,
              borderColor: "#fff"
            }
          }
        ],
        // legend必须要求要有一个name属性
        legend: {
          type: "scroll", // 超过height可以进行滑动
          orient: "vertical",
          height: 250,
          left: "70%", // 移动位置
          top: "middle",
          textStyle: {
            color: "#8c8c8c"
          }
        },
        tooltip: {
          trigger: "item", // 表示鼠标在item上面可以触发
          formatter: function(params) {
            // 对展示信息进行定制
            // console.log(params)
            return params.data.legendname + params.data.percent;
          }
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  justify-content: space-between;
  .process-view {
    width: 49%;
    .title {
      flex: 0 0 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      color: #333;
      padding: 0 0 0 20px;
      border-bottom: 1px solid #eee;
      font-weight: 500;
      font-size: 14px;
      box-sizing: border-box;
      padding-right: 20px;
    }
    .chart-wrapper {
      display: flex;
      padding: 0 10px;
      margin-top: 20px;
      justify-content: space-between;
      .chart {
        width: 48%;
        .chart-title {
          color: #999;
          font-size: 14px;
        }
        .chart-data {
          margin-top: 5px;
          font-size: 22px;
          color: #333;
          font-weight: 500;
          letter-spacing: 2px;
        }
        .chart-main {
          height: 50px;
        }
      }
    }
    .table-wrapper {
      margin-top: 20px;
      padding: 0 20px 20px;
    }
    .pie-chart {
      width: 100%;
      height: 452px;
    }
  }
}
</style>