<template>
  <div>
    <header class="bg-black">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
        <a class="navbar-brand" href="#">
          <img
            style="margin-bottom: 3px; margin-right: 5px;"
            src="/owlhacks-logo.png"
            alt="owlhacks-logo"
            width="26"
            height="25"
          />
          OwlHacks
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://goo.gl/forms/iode42v8iq3S7qqI3"
                target="_blank"
                >Register</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sponsorship Guide</a>
            </li>
          </ul>
        </div>
      </nav>
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

a,
a:hover,
a:focus {
  color: #99d1ff;
  text-decoration: none;
}

.bg-black {
  background: #202020;
}

.navbar-brand {
  margin-left: 20px;
}

@media (min-width: 992px) {
  .navbar {
    padding-left: 12%;
    padding-right: 12%;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
