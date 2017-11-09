<template>
  <section class="hero is-bold app-navbar animated">
    <div class="container is-fluid">
      <div class="hero-head">
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/documentation/overview/start/">
                  Docs
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="/documentation/overview/start/">
                    Overview
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
                  </a>
                  <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                      <b-icon pack="fa" icon="twitter"></b-icon>
                      <span>
                        Tweet
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                      <b-icon pack="fa" icon="download">
                      </b-icon>
                      <span>Download</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass">

</style>
