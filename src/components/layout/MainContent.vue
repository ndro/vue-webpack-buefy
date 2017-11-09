<template>
  <section class="main-content">
    <div class="container">
      <img src="~/assets/logo.png">
      <b-icon icon="person" pack="fa"></b-icon>
      <b-icon icon="person"></b-icon>
      <transition
          mode="out-in"
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
          appear>
          <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-content'
}
</script>

<style lang="sass">

</style>
