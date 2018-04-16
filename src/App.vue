<template>
    <div>
      <router-view></router-view>
      <FootGuide></FootGuide>

  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
    export default {
    components:{
      FootGuide
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
