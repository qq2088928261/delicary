<template>
  <Title :title="title"></Title>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="早餐" name="first">
      <Card :tabId="tabId" :cardSpan='7' :height="230"></Card>
    </el-tab-pane>
    <el-tab-pane label="午餐" name="second">
      <Card :tabId="tabId" :cardSpan='7' :height="230"></Card>
    </el-tab-pane>
    <el-tab-pane label="晚餐" name="third">
      <Card :tabId="tabId" :cardSpan='7' :height="230"></Card>
    </el-tab-pane>
    <el-tab-pane label="夜宵" name="fourth">
      <Card :tabId="tabId" :cardSpan='7' :height="230"></Card>
    </el-tab-pane>
  </el-tabs>
</template>
<script  setup>
import TabsPaneContext from 'element-plus'
import Card from '@/components/card.vue'
import Title from "@/components/common/title.vue"
import indexByDish from '@/api/module/index.ts'
onBeforeMount(() => {
  indexByDish(tabId)
}).then(res => {
  console.log(res);
})
//传标题
let title = ref('一日三餐')
//传标签ID
let tabId = ref()

const activeName = ref('first')

const handleClick = (tab, event) => {
  tabId.value = (Number(tab.index) + 1) + ''
  console.log(tabId.value);
  indexByDish(tabId).then(res => {
    console.log(res);
  })
}
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