<template>
  <Title :title="title"></Title>
  <Card :cardSpan='5' :height="183" :state="state"></Card>
</template>
<script setup>
const title = ref('为你推荐')
const state = ref('false')
import Card from '@/components/card.vue'
import Title from '@/components/common/title.vue'
</script>