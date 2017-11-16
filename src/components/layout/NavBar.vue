<template>
  <!--<section class="hero app-navbar is-bold">
    <div class="hero-head">-->
      <header class="navbar is-bold">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <i class="fa fa-cog fa-spin fa-2x fa-fw"></i> Logo
            <!-- ref: http://fontawesome.io/examples/#animated -->
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/ndro/vue-webpack-buefy" target="_blank">
            <b-icon pack="fa" icon="github" type="is-black"></b-icon>
          </a>
          <div class="navbar-burger burger" data-target="navbarDropdown">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarDropdown" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">
                Menu Hover
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                  Item 1
                </a>
                <a class="navbar-item" href="#">
                  Item 2
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="#">
                  Item after divider
                </a>
                <a class="navbar-item is-active" href="#">
                  Item is-active
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <!--<div class="navbar-item">-->
              <a class="navbar-item" href="https://github.com/ndro/vue-webpack-buefy" target="_blank">
                <b-icon pack="fa" icon="github" type="is-black"></b-icon>
              </a>
            <!--</div>-->
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary is-outlined" href="#">
                    <span>Button</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="#">
                    <b-icon pack="fa" icon="user"></b-icon>
                    <span>With Icon</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    <!--</div>
  </section>-->
</template>

<script>
export default {
}

/* burger navigation */
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #e0e0e0;
}
</style>

