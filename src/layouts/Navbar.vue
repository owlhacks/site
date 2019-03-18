<template>
  <div class="layout bg-red">
    <header class="bg-black">
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>-->
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>-->
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
          <a class="navbar-brand" href="#"><span style="margin-right: 5px;"><g-image src="~/assets/img/owlhacks-logo.png" width="25" height="25"/></span>{{ $static.metaData.siteName }}</a>
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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://goo.gl/forms/iode42v8iq3S7qqI3" target="_blank">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sponsorship</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.bg-black {
  background: #303030;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.navbar-brand{
  margin-left: 20px;
}

.layout {
  margin: 0 auto;
}

.nav__link {
  margin-left: 20px;
}
</style>
