<template>
  <div>
    <page-header></page-header>
    <mission-statement-video></mission-statement-video>
    <mission-statements></mission-statements>
    <support-links></support-links>
    <more-info></more-info>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import MissionStatementVideo from '@/components/MissionStatementVideo.vue';
import MissionStatements from '@/components/MissionStatements.vue';
import SupportLinks from '@/components/SupportLinks.vue';
import PageFooter from '@/components/PageFooter.vue';
import MoreInfo from '@/components/MoreInfo.vue';
export default {
  components: {
    PageHeader, MissionStatementVideo, MissionStatements, SupportLinks, PageFooter, MoreInfo
  },
}
</script>

<style scoped></style>
