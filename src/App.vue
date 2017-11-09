<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main-content></main-content>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { NavBar, MainContent, FooterBar } from 'components/layout/'

export default {
  components: {
    'nav-bar': NavBar,
    'main-content': MainContent,
    'footer-bar': FooterBar
  }
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
</style>
