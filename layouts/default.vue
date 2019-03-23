<template>
  <div>
    <header>
      <b-navbar toggleable="lg" class="navbar-dark bg-black fixed-top">
        <b-navbar-brand>
          <img
            style="margin-bottom: 3px; margin-right: 5px;"
            src="/owlhacks-icon.png"
            alt="owlhacks-icon"
            width="26"
            height="25"
          />
          <nuxt-link to="/">OwlHacks</nuxt-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse id="nav_collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav align="end">
              <b-nav-item
                href="https://goo.gl/forms/iode42v8iq3S7qqI3"
                target="_blank"
                >Register</b-nav-item
              >
              <b-nav-item>
                <nuxt-link class="text-grey" to="sponsorshipGuide"
                  >Sponsorship Guide</nuxt-link
                >
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar-brand a,
.text-grey {
  color: hsla(0, 0%, 100%, 0.5);
}
.navbar-brand a:hover,
.navbar-brand a:active,
.navbar-brand a:focus,
.text-grey:hover,
.text-grey:active,
.text-grey:focus {
  color: rgba(255, 255, 255, 0.75);
}

a,
a:hover,
a:focus {
  color: #99d1ff;
  text-decoration: none;
}

.bg-black {
  background: #202020;
}

.btn-red {
  color: #fff;
  background-color: #a41e35;
}
.btn-red:hover {
  color: #fff;
}

.navbar-brand {
  margin-left: 20px;
}
.navbar-toggler-icon {
  width: 1.2em;
}
.navbar-toggler {
  font-size: 1.2em;
  border: none !important;
  outline: none !important;
}

@media (min-width: 992px) {
  .navbar {
    padding-left: 6%;
    padding-right: 6%;
  }
}

@media (min-width: 1200px) {
  .navbar {
    padding-left: 12%;
    padding-right: 12%;
  }
}
.nav__link {
  margin-left: 20px;
}
</style>
