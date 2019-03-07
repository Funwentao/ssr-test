<template>
  <div class="home-content">{{msg}}</div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'home'
            }
        }
    }
</script>

<style scoped lang="less">
.home-content {
  color: red;
}
</style>