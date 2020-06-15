<!--
 * @Author: Helijun
 * @Date: 2020-06-15 16:27:05
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-15 18:32:44
 * @Description: 
--> 
<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal" :defaultActive="activeIndex" @select="onSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>

          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>

            <el-date-picker
              v-model="dateString"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              size="small"
              :picker-options="pickerOptions"
            >
              <!-- unlink-panels: 消除左右两侧的联动变化 -->
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper" >
          <div class="sales-view-chart">
            <v-chart :options="getChartOptions()"></v-chart>
          </div>
          <div class="sales-view-list">
            <div class="title">排行榜</div>
            <ul>
              <li v-for="(item) in rankData" :key="item.id">
                <div :class="['item-id', +item.id < 4 ? 'top' : '']">{{item.id}}</div>
                <div class="item-name">{{item.name}}</div>
                <div class="item-money">{{item.money}}</div>
              </li>
            </ul>
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
      activeIndex: "1",
      radioSelect: "今日",
      dateString: null,
      pickerOptions: {
        // 在选项盘中增加最近一段时间的，且增加自动选择
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date().getTime() - 3600 * 24 * 1000 * 7;
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date().getTime() - 3600 * 24 * 1000 * 30;
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date().getTime() - 3600 * 24 * 1000 * 90;
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      rankData: [{
        id: 1,
        name: '麦当劳',
        money: '777,666'
      },{
        id: 2,
        name: '肯德基',
        money: '777,666'
      },{
        id: 3,
        name: '德克士',
        money: '777,666'
      },{
        id: 4,
        name: '汉堡王',
        money: '777,666'
      }]
    };
  },

  methods: {
    onSelect(index) {
      // onSelect(index, indexPath, item) {
      this.activeIndex = index;
    },

    getChartOptions() {
      return {
        title: {
          text: '年度销售额',
          textStyle: {
            color: '#666',
            fontSize: '12px'
          },
          left: 25,
          top: 15
        },
        xAxis: {
          type: 'category',
          data: ['一月','二月','三月','四月','五月','六月','七月',],
          axisTick: {
            alignWithLabel: true, // 坐标的短竖线和条形图在一起
            lineStyle: {            
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {  // 横坐标标签的颜色
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false,  // 去掉Y轴的坐标系
          },
          axisTick: {
            show: false   
          },
          splitLine: {
            lineStyle: {    // 修改Y轴分割线的样式
              color: '#eee',
              type: 'dotted',
            }
          }
        },
        series: [{
          color: ['#3398DB'],
          type: 'bar',
          barWidth: '20%',
          data: ['200','300','300','400','200','300','480']
        }],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-radio-group {
    margin-right: 20px;
  }
}

.sales-view-chart-wrapper {
  display: flex;
  height: 270px;
  .sales-view-chart{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    width: 70%;
    height: 100%;
  }
  .sales-view-list {
    flex: 1;
    .title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
      margin-bottom: 15px;
    }
    ul{
      margin: 0;
      padding: 0;
      li {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 24px;
        justify-content: space-between;
        padding: 6px 20px 6px 0;
        .item-id {
          margin-right: 10px;
          flex-shrink: 1;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          &.top {
            background: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }
        .item-name {
          flex: 1;
        }
        .item-money {
          
        }

      }
    }
  }
}
</style>