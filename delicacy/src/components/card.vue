<template>
  <el-row>
    <el-col v-for="(item, index) in cardList" :key="item.id" :span='cardSpan'>
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.img" class="image" :style="{'height':height+'px'}" />
        <div style="padding: 14px">
          <span>{{item.name}}</span>
          <div class="bottom">
            <time class="time">描述</time>
            <el-button text class="button">收藏</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script  setup>
let Daterecommended = ref([])
import { indexByDateRecommended } from '@/api/module/index.ts'
onBeforeMount(() => {
  if (props.state === 'false') {
    indexByDateRecommended(
    ).then(res => {
      console.log(res);
    })
  }
})
const cardList = ref([
  {
    id: 1,
    name: '孜然牛肉',
    img: '/src/assets/img/孜然牛肉.png'
  },
  {
    id: 2,
    name: '小炒肉',
    img: '/src/assets/img/小炒肉.png'
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
  }

])
const props = defineProps({
  id: {
    type: Number,//类型字符串
    default: 1//如果没有传递msg参数,默认值是这个
  },
  //24分栏的span属性
  cardSpan: {
    type: Number,//类型字符串
    default: 7//如果没有传递msg参数,默认值是这个
  },
  //图片高度
  height: {
    type: Number,
    default: '230'
  },
  //限定是否分页
  state: {
    type: Boolean,
    default: true
  }
})



</script>

<style scoped>
.el-col-7 {
  margin: 0 23px 20px 22px;
}

.el-col-5 {
  margin: 0 23px 20px 22px;
}

.el-row {
  margin: 20px 214.5px;
}

.time {
  font-size: 12px;
  color: #999;
}



.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>