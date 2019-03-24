<template>
  <div>
    <MainJumbotron />
    <SponsorLogos />
  </div>
</template>

<script>
import MainJumbotron from '~/components/MainJumbotron.vue'
import SponsorLogos from '~/components/SponsorLogos.vue'

export default {
  components: {
    MainJumbotron,
    SponsorLogos
  }
}
</script>
