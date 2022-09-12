<template>
  <Title :title="title"></Title>
  <div class=" channels">
    <img class="main-img1" src="../../assets/img/美食圈.jpg">
    <img class="main-img2" src="../../assets/img/健康美食.jpg">
    <div class="channels-content" v-for="item in modules">
      <div :class="'card'+item.id">
        <div class="head">
          <span class="text1">{{item.name}}</span>
          <span class="text2">{{item.name}}</span>
        </div>
        <div class="foot">
          <img :src="item.img">
          <img :src="item.img">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Title from '@/components/common/title.vue'
const title = ref('热门模块')
const modules = reactive([
  {
    id: 1,
    name: '孜然牛肉',
    img: '/src/assets/img/孜然牛肉.png',
  },
  {
    id: 2,
    name: '小炒肉',
    img: '/src/assets/img/小炒肉.png',
  },
  {
    id: 3,
    name: '洋葱炒猪肉',
    img: '/src/assets/img/洋葱炒猪肉.png'
  },
  {
    id: 4,
    name: '糖醋里脊',
    img: '/src/assets/img/糖醋里脊.png'
  },
  {
    id: 5,
    name: '紫菜蛋花汤',
    img: '/src/assets/img/紫菜蛋花汤.png'
  },
  {
    id: 6,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 7,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 8,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 9,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 10,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 11,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  },
  {
    id: 12,
    name: '西红柿炒鸡蛋',
    img: '/src/assets/img/西红柿炒鸡蛋.png'
  }


])
</script>
<style scoped>
.channels {

  display: grid;
  /* 定义3行，每行高为100px */
  grid-template-rows: repeat(3, 190px);
  /* 定义3列，第列宽为100px */
  grid-template-columns: repeat(4, 300px);
  /* 每个单元格定义为一个区域，每个区域名分别为 a 到i */
  grid-template-areas:
    "a b c d"
    "a b e f"
    "g h i j";
  width: 1200px;
  height: 950px;
  margin-left: 159.6px;
  margin-right: 159.6px;
}


.channels-content {
  width: 290px;
  height: 180px;
  margin: 0 0 10px 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
}


.main-img1 {
  height: 390px;
  width: 300px;
  grid-row: 1/span 2;
}

.main-img2 {
  height: 390px;
  width: 300px;
  grid-row: 1/span 2;
}


.head {
  width: 250px;
  height: 30px;
  margin-left: 30px;
  margin-right: 10px;
  padding-top: 17px;
  padding-bottom: 13px;
}

.foot {
  padding-left: 30px;
}

.text1 {
  font-weight: bold;
  color: #333;
  font-size: 18px;

}

.text2 {
  font-size: 14px;
  color: #999;
  margin-left: 5px;


}


.channels-content img {
  width: 100px;
  height: 100px;
}


.channels-content h3 {
  height: 30px;
  margin-left: 30px;
  margin-right: 10px;
  padding-top: 17px;
  padding-bottom: 13px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
