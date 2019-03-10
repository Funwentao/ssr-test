<template>
  <div class="index-content">{{msg}}</div>
</template>

<script>
    export default {
        name: 'page',
        data() {
            return {
                msg: 'page'
            }
        }
    }
</script>

<style scoped lang="less">
.index-content {
  color: lightsalmon;
}
</style>