<template>
  <section class="home">
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Home Page
          </h1>
          <h2 class="subtitle">
            {{ msg }}
          </h2>
        </div>
      </div>
    </div>
    <div class="additional-bar has-shadow">
      <div class="container">
        <div class="content has-text-centered">
          <!-- write content here -->
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content">
          <b-field grouped group-multiline>
            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">vue</b-tag>
                <b-tag type="is-success">2.5.2</b-tag>
              </b-taglist>
            </div>

            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">buefy</b-tag>
                <b-tag type="is-primary">0.6.1</b-tag>
              </b-taglist>
            </div>

            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">webpack</b-tag>
                <b-tag type="is-info">3.8.1</b-tag>
              </b-taglist>
            </div>
          </b-field>
          <h1 class="title">Getting Started</h1>
          <hr>
          <h4><b>Create</b> project using <span class="tag">vue-cli</span>: </h4>
          Clone or download the project, <a href="https://github.com/ndro/vue-webpack-buefy/archive/master.zip">here</a>. Then,
          <pre>
            $ cd (folder-project)
            $ npm install
          </pre>
          <h4><b>run</b> project with: (<a href="https://github.com/vuejs-templates/webpack">reference</a>)</h4>
          <pre>
            # serve with hot reload at localhost:8080
            $ npm run dev

            # build for production with minification
            $ npm run build

            # build for production and view the bundle analyzer report
            $ npm run build --report
          </pre>
          <h4>if you want to run <b>unit-test</b> using: (<a href="https://github.com/vuejs-templates/webpack">reference</a>)</h4> <i>*doesn't implemented yet</i>
          <pre>
            # run unit tests
            $ npm run unit

            # run e2e tests
            $ npm run e2e

            # run all tests
            $ npm test
          </pre>
          <hr>
          <h4>For more <b>reference</b>:</h4>
          <ul>
            <li><a href="https://vuejs.org/v2/guide/">Vue.js</a></li>
            <li><a href="https://bulma.io/documentation/overview/start/">Bulma</a></li>
            <li><a href="https://buefy.github.io/#/documentation/start">Buefy</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue">Awesome Vue.js</a> (additional reference)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Vue.js starter with full-featured Webpack and Buefy'
    }
  }
}
</script>

<style lang="scss" scoped>
.additional-bar {
  padding: 15px;
}

.gh-btn {
  background-color: #eee;
  background-repeat: no-repeat;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  white-space: nowrap;
  cursor: pointer;
}
</style>

