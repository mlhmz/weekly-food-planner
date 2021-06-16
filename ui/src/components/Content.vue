<template>
  <div class="content">
    <nav class="navbar navbar-light bg-success">
      <a class="navbar-brand" href="#">Essens-Planer</a>
    </nav>
    <div class="container">
      <div class="row">
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Montag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Dienstag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Mittwoch</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Donnerstag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Freitag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Samstag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="row title bg-success">
            <h3>Sonntag</h3>
            </div>
            <div class="row">
              <p>Sample Text. Ich bin Toll! Blablablablabla</p>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .container {
    margin-top: 15px;
  }

  h3 {
    vertical-align: middle;
  }

  .row {
    box-shadow: -.5px -.5px 0 .5px #198754, inset -1px -1px 0 0 #198754;
  }

  .col-lg {
  }
</style>
