<template>
  <PageNavBar></PageNavBar>
  <RouterView />
  <PageFooter></PageFooter>
</template>

<script>
import PageNavBar from "./components/PageNavBar.vue"
import PageFooter from "./components/PageFooter.vue"
export default {
  components:{
    'PageNavBar':PageNavBar,
    'PageFooter':PageFooter,
  },
}
</script>

<style scoped>
</style>
