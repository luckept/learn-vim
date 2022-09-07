<script setup>

const routes = [
  {
    name: 'Vim 篇',
    path: 'vim/index'
  },
  {
    name: 'VScode 篇',
    path: 'vscode/index'
  },
  {
    name: 'Chrome 篇',
    path: 'chrome/index'
  },
  {
    name: 'Iterm 篇',
    path: 'iterm/index'
  },
  {
    name: 'Mac 篇',
    path: 'mac/index'
  }
]

const handleClick = (route) => window.location.href = route.path

</script>
  
<template>
  <div class="container">
    <div class='route-item' @click='handleClick(route)' v-for='route in routes' :key='route.path'>{{ route.name }}</div>
  </div>
</template>
  
<style lang="scss" scoped>
.container {
  padding-top: 100px;
  width: 1000px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  1fr 1fr 1fr;
  .route-item {
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 6px;
    box-shadow: 0 0 10px #eee;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 20px #eee;
    }
  }
}
</style>