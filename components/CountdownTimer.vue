<template id="countdown-template">
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | twoDigits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | twoDigits }}</p>
      <p class="text">Hrs</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | twoDigits }}</p>
      <p class="text">Mins</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | twoDigits }}</p>
      <p class="text">Secs</p>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    twoDigits(value) {
      if (value < 0) {
        return '00'
      }
      if (value.toString().length <= 1) {
        return `0${value}`
      }
      return value
    }
  },
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
    /* convert date for ios b/c Y-m-d H:i:s is not supported */
    const arr = this.date.split(/[- :]/)
    this.date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5])

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
  background: #a41e35;
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
