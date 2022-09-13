<template>
  <Title :title="title"></Title>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="最新" name="first">
      <Card :id="id" :cardSpan='5' :height="183"></Card>
    </el-tab-pane>
    <el-tab-pane label="最热" name="second">
      <Card :id="id" :cardSpan='5' :height="183"></Card>
    </el-tab-pane>
  </el-tabs>
</template>
<script  setup>
import TabsPaneContext from 'element-plus'
import Card from '@/components/card.vue'
import Title from "@/components/common/title.vue"
import { indexByRecommended } from '@/api/module/index.ts'

//传标题
let title = ref('今日榜单')
//传标签ID
let id = 1


const activeName = ref('first')

const handleClick = (tab, event) => {
  id = Number(tab.index) + 1
  indexByRecommended({ id }).then(res => {
    console.log(res);
  })
}
onBeforeMount(() => {
  indexByRecommended({ id }).then(res => {
    console.log(res);
  })
})
</script>
<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
<style>
.el-tabs__nav {
  margin-left: 230px;
}
</style>