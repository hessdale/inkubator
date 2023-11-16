<template>
  <div>
    <page-header></page-header>
    <home-about></home-about>
    <home-video></home-video>
    <home-subscribe></home-subscribe>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import HomeAbout from '@/components/HomeAbout.vue';
import HomeVideo from '@/components/HomeVideo.vue';
import HomeSubscribe from '@/components/HomeSubscribe.vue';
export default {
  components: {
    PageHeader, PageFooter, HomeAbout, HomeVideo, HomeSubscribe
  },
}
</script>

<style scoped></style>