<template>
  <!--<router-view></router-view>-->
  <div>
    <about></about>
    <home></home>
  </div>
</template>

<script>
    import about from './views/About.vue'
    import home from './views/Home.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'home'
            }
        },
        components: {
            about,
            home
        }
    }
</script>

<style scoped lang="less">
  .home-content {
    color: red;
  }
</style>