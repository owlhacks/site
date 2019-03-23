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
    <div class="container sponsor-info">
      <h1
        style="color: white; background-color: #444444; padding: 5px; margin-top: 15px;"
        align="center"
      >
        OwlHacks
      </h1>
      <p>
        Hackathons are programming marathons where students build services,
        gadgets, and apps to win prizes, and ultimately, recognition. Hackathons
        are a paradigm shift in technology education, and they have taken the
        world by storm. They encourage learning and innovation through
        collaboration and have produced some of the most capable thinkers and
        innovators of the next generation.
        <br />
        <br />ACM, ACM-W and TUDev will be throwing a 12hr hackathon titled
        "OwlHacks" on <b>March 30th, 2019.</b> Our hackathon will attract some
        of the top undergraduate developers, engineers, and designers in the
        Philadelphia area. This makes OwlHacks a great recruiting and marketing
        opportunity. We’re inviting companies to present their products and
        services for students to explore and leverage in their applications, and
        we would like you to be one of them.
      </p>
      <h2 style="color: #9E1B34">That's Where You Come In</h2>
      <p>
        We want you to be a part of the OwlHacks family, and we think that
        sponsoring OwlHacks has some clear advantages:
      </p>
      <ul>
        <li>
          <p>
            You have the opportunity to recruit, network with, and market your
            brand to some of the best student engineers on the east coast
          </p>
        </li>
        <li>
          <p>
            Although students have complete autonomy over what they choose to
            develop, companies may influence them through OwlHacks facilitated
            marketing:
          </p>
          <ul>
            <li>
              <p>Mentoring</p>
            </li>
            <li>
              <p>Tech Talks</p>
            </li>
            <li>
              <p>API Demos & Prizes</p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            You have a unique ability to serve the community in a very efficient
            and public way by helping student engineers and designers learn how
            to build and utilize technology
          </p>
        </li>
        <li>
          <p>
            Your company get a vantage-point on the bleeding edge of the
            technological landscape; it’s a great opportunity to hear tomorrow’s
            startup ideas today
          </p>
        </li>
      </ul>
      <h2 style="color: #9E1B34">How You Can Help</h2>
      <p>
        OwlHacks is going to be a huge undertaking, and we need all the support
        that we can get. There are many ways to support our cause, the most
        effective of which are listed below:
      </p>
      <ul>
        <li>
          <p>
            Donate financially to OwlHacks. This allows us the flexibility to
            spend money where we need it the most
          </p>
        </li>
        <li>
          <p>Sponsor a meal</p>
        </li>
        <li>
          <p>
            Sponsor tools for students to use during the event (e.g. web
            hosting, wi-fi, hardware)
          </p>
        </li>
        <li>
          <p>Provide workshops & seminars to students</p>
        </li>
      </ul>
      <p>
        Help us make OwlHacks an incredible experience for learning and
        invention. Our sponsorship packages, listed on the next page, outline
        our monetary contribution model. The higher your contribution, the more
        access you get to the student developers at OwlHacks. We are always
        looking for new and exciting things for our event.
        <br />
        <br />Please contact
        <b
          ><a class="redtext" href="mailto:mcginnr@temple.edu"
            >mcginnr@temple.edu</a
          ></b
        >
        if you have any questions or wish to schedule a phone call with an
        OwlHacks organizer.
      </p>
    </div>
    <SponsorChart />
  </div>
</template>

<script>
import SponsorChart from '~/components/SponsorChart.vue'

export default {
  components: {
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
