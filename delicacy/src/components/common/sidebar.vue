<template>
  <div class="menu-list">
    <ul class="menuFirst">
      <li class="menuFristList" v-for=" item in json" :key="item.id" @mouseover="getFirstList($event)"
        @mouseout="firstList($event)">
        <a :href="item.src">{{ item.name }}</a>
        <ul class="menuSecond" v-if="actState" v-for="item1 in item.children">
          <li>
            <a :href="item1.src">{{ item1.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
let actState=ref(false)
let json = [
  {
    name: "一级菜单1",
    src: '#',
    id:'1',
    children: [
      {
        name: "二级菜单1",
        src: '#',
        id:'1',
      }]
  },
  {
    name: "一级菜单2",
    src: '#',
    id:'2',
    children: [{
      name: "二级菜单2",
      src: '#',
      id:'1',
    }]
  },
  {
    name: "一级菜单3",
    src: '#',
    id:'3',
    children: [{ name: "二级菜单3", src: '#',id:'1', }]
  },
  {
    name: "一级菜单4",
    src: '#',
    id:'4',
    children: [{ name: "二级菜单4", src: '#',id:'1', }]
  },
  {
    name: "一级菜单5",
    src: '#',
    id:'5',
    children: [{ name: "二级菜单5", src: '#',id:'1', }]
  }
]
const getFirstList = (e) => {

  e.target.style.background = '#FE5761';
  actState.value=true
  


}
const firstList = (e) => {
  e.target.style.background = '  #f4f4f5'
  actState.value=false
  
}

</script>
<style scoped>
.menu-list {
  width: 200px;
  height: 360px;
  margin: 35px 0 35px 221.5px;
  background: #f4f4f5;
}



.menuFirst a {
  display: block;
  height: 24px;
  line-height: 24px;
  padding: 24px 0;
  text-decoration: none;
  color: black;
}

.menuSecond {
  height: 360px;
  width: 460px;
  position: absolute;
  top: 110px;
  left: 421.5px;
  z-index: 99;
  background-color: #fff;
}
</style>