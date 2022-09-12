<template>
  <div class="menu">
    <Siderbar></Siderbar>
    <el-carousel indicator-position="outside" height="360px">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <img :src="item.img" class="carousel-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import Siderbar from "@/components/common/sidebar.vue"
//轮播图
let carouselList = ref([
  {
    id: 1,
    img: '/src/assets/img/孜然牛肉.png'
  },
  {
    id: 2,
    img: '/src/assets/img/小炒肉.png'
  },
  {
    id: 3,
    img: '/src/assets/img/洋葱炒猪肉.png'
  },
  {
    id: 4,
    img: '/src/assets/img/糖醋里脊.png'
  }
]

);

</script>
<style scoped>
.menu {
  display: flex;
}

.el-carousel--horizontal {
  width: 893px;
  height: 395px;
  margin: 35px 0;
}


.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;

}


.carousel-img {
  width: 100%;
  height: 100%;
  background: no-repeat center;
}
</style>