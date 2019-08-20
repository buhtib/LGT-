<template>
  <div id="app">
     <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<style lang="less">
@import './style/base.less';
@import './style/global.less';

#app {
    height: 100%;
    width: 100%;
 }

</style>
