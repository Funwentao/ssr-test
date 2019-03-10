<template>
  <div class="bar-content">{{msg}}</div>
</template>

<script>
    export default {
        name: 'bar',
        data() {
            return {
                msg: 'bar'
            }
        }
    }
</script>

<style scoped lang="less">
.bar-content {
  color: lightsalmon;
}
</style>