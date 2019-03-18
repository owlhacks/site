<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135"/>

      <h1>Hello, world!</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

      <p class="home-links">
        <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p>-->
      <Jumbotron />
      <Sponsors />
  </Layout>
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'
import Sponsors from '~/components/Sponsors.vue'

export default {
  metaInfo: {
    title: "OwlHacks"
  },
  components: {
    Jumbotron,
    Sponsors
  }
};
</script>

<style>
a,
a:hover,
a:focus {
  text-decoration: none;
}

.home-links a {
  margin-right: 1rem;
}

.bg-red {
  background: #a41e35;
}

.text-red{
  color: #a41e35;
}

.bg-darkblack{
  background: #232323;
}
</style>
