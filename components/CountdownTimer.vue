<template id="countdown-template">
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours }}</p>
      <p class="text">Hrs</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes }}</p>
      <p class="text">Mins</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds }}</p>
      <p class="text">Secs</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  }
}
</script>

<style>
.countdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
  padding: 5px 10px;
  background: #303030;
  border-radius: 3px;
}

.block p {
  margin: 0px;
}

.text {
  color: #ecf0f1;
  font-size: 20px;
  font-weight: 40;
  margin-bottom: 5px;
  text-align: center;
}

.digit {
  color: #ecf0f1;
  font-size: 30px;
  font-weight: 100;
  margin: 0px;
  text-align: center;
}
</style>
