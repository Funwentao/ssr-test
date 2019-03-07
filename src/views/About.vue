<template>
  <div class="about-content">{{msg}}</div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                msg: 'about'
            }
        }
    }
</script>

<style scoped lang="less">
.about-content {
  color: lightsalmon;
}
</style>