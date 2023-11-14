<template>
  <div>
    <page-header></page-header>
    <home-about></home-about>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import HomeAbout from '@/components/HomeAbout.vue'
export default {
  components: {
    PageHeader, PageFooter, HomeAbout
  },
}
</script>

<style scoped></style>