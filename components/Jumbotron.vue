<template>
  <section class="jumbo">
    <div class="container text-light">
      <div class="row py-5">
        <div class="col-xl-6 my-3">
          <h1 class="display-4">OwlHacks</h1>
          <p style="font-size: 24px;">Temple University's 12 Hour Hackathon</p>
          <p>
            Who: College students with a passion for technology
            <br />Where: SERC Lobby <br />When: Saturday, March 30th, 2019
            <br />8AM - 10PM
            <br />
          </p>
          <p>
            <a
              class="btn btn-dark btn-lg"
              href="https://goo.gl/forms/iode42v8iq3S7qqI3"
              role="button"
              >Register</a
            >
          </p>
          <p>
            <a class="btn btn-dark btn-lg" href="#" role="button"
              >Sponsorship Guide</a
            >
          </p>
          <p>
            Interested in sponsoring? Please email
            <a href="mailto:mcginnr@temple.edu">mcginnr@temple.edu</a>
          </p>
          <p>Organized by Temple ACM / Temple ACM-W / TUDev</p>
        </div>
        <div class="col-xl-6">
          <img
            id="owl"
            src="/owlhacks-logo.png"
            alt="owlhacks logo"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.jumbo {
  text-align: left;
  /* a41e35 */
  background: #a41e35;
  background-image: url('~assets/pattern.svg');
}

@media (min-width: 992px) {
  .jumbo {
    padding-top: 4%;
    padding-bottom: 3%;
  }

  #owl {
    margin-top: 4%;
  }
}

#owl:hover {
  filter: brightness(120%);
}

@media (max-width: 992px) {
  #owl {
    max-width: 300px;
    max-height: 300px;
  }
}
</style>
