<template>
  <section class="jumbo-container">
    <div class="container">
      <div class="text-light my-0 py-3">
        <div class="row">
          <div class="col-xl-6">
            <img
              src="/owlhacks-logo.png"
              alt="owlhacks logo"
              width="300"
              height="300"
            />
            <h1 class="display-4">OwlHacks</h1>
            <p class="lead">Temple University's 12 Hour Hackathon</p>
          </div>
          <div id="info" class="col-xl-6">
            <p>
              Who: College students with a passion for technology
              <br />Where: SERC Lobby <br />When: Saturday, March 30th, 2019
              <br />8AM - 10PM
              <br />
            </p>
            <p class="lead">
              <a class="btn btn-dark btn-lg" href="#" role="button">Register</a>
            </p>
            <p class="lead">
              <a class="btn btn-dark btn-lg" href="#" role="button"
                >Sponsorship Guide</a
              >
            </p>
            <p>Organized by Temple ACM / Temple ACM-W / TUDev</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.jumbo-container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #a41e35;
  background-image: url('~assets/pattern.svg');
}

@media (min-width: 992px) {
  #info {
    margin-top: 5%;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 75px;
  /* color: #212c38; */
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 400;
  font-size: 35px;
  /* color: #212c38; */
  word-spacing: 5px;
}

.subtitle-sm {
  font-weight: 300;
  font-size: 22px;
}
</style>
