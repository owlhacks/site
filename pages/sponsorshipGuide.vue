<template>
  <div>
    <div id="sponsor-jumbo">
      <div class="container" align="center">
        <img
          id="sponsor-owl"
          src="/owlhacks-logo.png"
          height="400"
          width="400"
        />
        <h1 style="color: white;">OwlHacks Sponsorship</h1>
        <div
          style="background-color: white; height: 1px; width: 50%; margin: 20px;"
        ></div>
        <h4 style="color: white;">
          Interested in sponsoring? Please email
          <a href="mailto:mcginnr@temple.edu">mcginnr@temple.edu</a>
        </h4>
      </div>
    </div>
    <SponsorInfo />
    <SponsorChart />
  </div>
</template>

<script>
import SponsorInfo from '~/components/SponsorInfo.vue'
import SponsorChart from '~/components/SponsorChart.vue'

export default {
  components: {
    SponsorInfo,
    SponsorChart
  },
  head() {
    return {
      title: 'OwlHacks Sponsorship',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'OwlHacks Sponsorship Guide'
        }
      ]
    }
  }
}
</script>

<style>
#sponsor-jumbo {
  padding-top: 5rem;
  padding-bottom: 6rem;
  background-color: #a41e35;
  background-image: url(/pattern-red.svg);
}
@media (max-width: 992px) {
  #sponsor-owl {
    max-width: 300px;
    max-height: 300px;
  }
}
@media (min-width: 992px) {
  .sponsor-info {
    max-width: 65%;
  }
  .sponsor-table {
    max-width: 65%;
  }
}
.redtext {
  color: #a41e35;
}
</style>
