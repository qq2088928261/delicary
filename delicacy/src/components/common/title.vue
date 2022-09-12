<template>
  <div class="title-content">
    <img src="@/assets/img/美食 (2).png">
    <h3>{{title}}</h3>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String
  },
  src: {
    type: String
  }

})
</script>
<style scoped>
.title-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
}

.title-content img {
  height: 30px;
  width: 30px;
}
</style>