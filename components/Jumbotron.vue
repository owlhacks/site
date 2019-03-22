<template>
  <section class="jumbo">
    <div class="video-container">
      <video id="video">
        <source src="/Phillytest2" type="video/mp4" />
      </video>
    </div>
    <div class="container text-light">
      <div class="row py-5">
        <div class="col-xl-7 my-3">
          <h1 class="display-4">OwlHacks</h1>
          <p style="font-size: 24px;">Temple University's 12 Hour Hackathon</p>
          <p>
            <b>Who:</b> College students with a passion for technology
            <br />
            <b>Where:</b>
            <a href="https://goo.gl/maps/YnJN7i4jKjp" target="__blank"
              >SERC Lobby - Temple University, Philadelphia, PA</a
            >
            <br />
            <b>When:</b> Saturday, March 30th, 2019 from 8AM - 10PM
            <br />
          </p>
          <p>
            <a
              class="btn btn-red btn-lg"
              href="https://goo.gl/forms/iode42v8iq3S7qqI3"
              target="__blank"
              role="button"
              >Register</a
            >
          </p>
          <p>
            <a class="btn btn-red btn-lg" href="#" role="button"
              >Sponsorship Guide</a
            >
          </p>
          <p class="my-0">
            Questions? Please contact
            <a href="mailto:tudev@temple.edu">tudev@temple.edu</a>
          </p>
          <p style="margin-bottom: 2rem">
            Interested in sponsoring? Please email
            <a href="mailto:mcginnr@temple.edu">mcginnr@temple.edu</a>
          </p>
          <p>Organized by Temple ACM / Temple ACM-W / TUDev</p>
        </div>
        <div class="col-xl-5">
          <img
            id="owl"
            src="/owlhacks-logo.png"
            alt="owlhacks logo"
            width="400"
            height="400"
            @click="toggleVideo"
          />
          <CountdownTimer date="2019-03-30 08:00:00"></CountdownTimer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountdownTimer from '~/components/CountdownTimer.vue'

export default {
  components: {
    CountdownTimer
  },
  methods: {
    toggleVideo() {
      const video = document.getElementById('video')
      if (video.paused) video.play()
      else video.pause()
    }
  }
}
</script>

<style>
.jumbo {
  text-align: center;
  background: #a41e35;
  height: 100%;
  position: relative;
  /* background-image: url('~assets/pattern.svg'); */
}

@media (min-width: 992px) {
  .jumbo {
    padding-top: 4%;
    padding-bottom: 2%;
    text-align: left;
  }

  .countdown {
    margin-right: 40px;
  }

  #owl {
    margin-top: 2%;
  }
}

#owl:hover {
  filter: brightness(120%);
  cursor: pointer;
}

@media (max-width: 992px) {
  #owl {
    max-width: 300px;
    max-height: 300px;
  }
}

@media (max-width: 992px) {
  .video-container {
    display: none;
  }
}

.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.3;
}
.video-container video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
