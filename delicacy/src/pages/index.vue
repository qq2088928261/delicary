<template>
  <Header></Header>
  <Carousel></Carousel>
  <TabCard></TabCard>
  <Day></Day>
  <Recommendation></Recommendation>
  <Modules></Modules>
  <Foot></Foot>

</template>
<script setup>
import Header from "/src/components/common/header.vue"
import Carousel from "/src/components/common/carousel.vue"
import TabCard from "@/components/common/tabCard.vue"
import Foot from "@/components/common/foot.vue"
import Recommendation from '@/components/common/recommendation.vue';
import Day from '@/components/common/day.vue'
import Modules from '@/components/common/modules.vue'
</script>