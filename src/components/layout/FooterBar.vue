<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column is-2">
            <h4>Navigation 1</h4>
             <p><router-link :to="{ name: 'Home' }">Home</router-link></p>
             <p><router-link :to="{ path: '/' }">Item 1</router-link></p>
             <p><router-link :to="{ path: '/#/' }">Item 2</router-link></p>
          </div>
          <div class="column is-2">
            <h4>Navigation 2</h4>
             <p><router-link :to="{ name: 'Home' }">Home</router-link></p>
             <p><router-link :to="{ path: '/' }">Item 1</router-link></p>
             <p><router-link :to="{ path: '/#/' }">Item 2</router-link></p>
          </div>
          <div class="column">
            <p>
              <b>Support</b> us!
              <br>
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/ndro/vue-webpack-buefy" data-size="large" data-show-count="true" aria-label="Star ndro/vue-webpack-buefy on GitHub">
                Star
              </a>
              &nbsp;&nbsp;&nbsp;
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/ndro/vue-webpack-buefy" data-size="large" aria-label="Fork ndro/vue-webpack-buefy on GitHub">
                Fork
              </a>
            </p>
          </div>
          <div class="column">
            <b>Official </b>reference:
            <div class="columns">
              <div class="column">
                <a href="https://vuejs.org/v2/guide/" target="_blank">
                  <img src="~assets/vue-logo.svg" alt="" width="90">
                </a>
              </div>
              <div class="column">
                <a href="https://github.com/vuejs-templates/webpack" target="_blank">
                  <img src="~assets/vue-webpack-logo.png" alt="" width="80">
                </a>
              </div>
              <div class="column">
                <a href="https://bulma.io/documentation/overview/start/" target="_blank">
                  <img src="~assets/bulma-logo.png" alt="" width="100">
                </a>
              </div>
            </div>
            <b>Additional </b>reference:
            <div class="columns">
              <div class="column">
                <a href="https://buefy.github.io/#/documentation/start" target="_blank">
                  <img src="~assets/buefy-logo.png" alt="" width="80">
                </a>
              </div>
              <div class="column">
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">
                  <img src="~assets/awesome-logo.png" alt="" width="90">
                </a>
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
        <div class="columns has-text-centered">
          <div class="column">  
            <p>
              by <a href="http://kabut.id/" target="_blank">kabut.id</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>

</style>

