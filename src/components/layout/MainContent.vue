<template>
  <section class="main-content">
    <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'main-content'
}
</script>

<style lang="scss" scoped>
.main-content {
  min-height: 400px;
}
</style>
