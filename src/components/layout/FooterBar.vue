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
          <div class="column has-text-centered">
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
            <b>Contact </b>us:
            <p>
              Best company of the world<br>
              JL. Street No. 0, City<br>
              <b-icon pack="fa" icon="envelope"></b-icon> <span>email@yourcompany.com</span><br>
              <b-icon pack="fa" icon="facebook-square"></b-icon> <span><a href="https://facebook.com/yourfb" target="_blank">Your Company</a></span><br>
              <b-icon pack="fa" icon="instagram"></b-icon> <span><a href="https://instagram.com/your ig" target="_blank">&#64;company</a></span>
            </p>
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

