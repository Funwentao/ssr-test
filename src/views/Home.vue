<template>
  <div class="home-content">
    <button @click="onGotoAbout">按钮</button>
    <div>123</div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'home'
            }
        },
        methods: {
          onGotoAbout() {
            this.$router.push('/about')
          }
        },
        beforeRouteEnter(to, from, next) {
          console.log(to, from, 'enter')
          next()
        },
        beforeRouteUpdate (to, from, next) {
          console.log(to, from, 'update')
          next()
        },
        beforeRouteLeave  (to, from, next) {
          console.log(to, from, 'leave')
          next()
        }
    }
</script>

<style scoped lang="less">
.home-content {
  color: red;
}
</style>