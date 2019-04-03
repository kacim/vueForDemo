<template>
    <div>{{showWord}}</div>
</template>
<script type="text/javascript">
export default {
    name: 'testDetail',
    data() {
        return {
            showWord: '123'
        }
    },
    watch: {
      $route(){
        this.showWord = this.$route.query.aId
      }
  }
}
</script>