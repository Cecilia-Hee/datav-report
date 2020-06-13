<!--
 * @Author: Helijun
 * @Date: 2020-06-11 18:43:51
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-12 18:44:14
 * @Description: 
--> 
<template>
  <div class="top-view">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>      
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>      
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users></today-users>      
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>      
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalOrders from '../TotalOrders'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'
export default {
  data() {
    return {
      list: ["实验", "实验", "实验", "实验"]
    };
  },

  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
};
</script>

<style>
</style>