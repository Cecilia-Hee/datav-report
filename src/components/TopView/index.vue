<!--
 * @Author: Helijun
 * @Date: 2020-06-11 18:43:51
 * @LastEditors: Helijun
 * @LastEditTime: 2020-06-11 18:57:33
 * @Description: 
--> 
<template>
  <div class="top-view">
    <el-row :gutter="12">
      <el-col span="6" v-for="(item, index) in list" :key="index">
        <el-card shadow="hover">
          
            {{item}}
          
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["实验", "实验", "实验", "实验"]
    };
  }
};
</script>

<style>
</style>