<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light header py-3">
      <div class="container-fluid">
        <a class="navbar-brand">The Top Movie Database</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" >Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss" scoped>
.header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #2b2b31 !important;
    z-index: 101;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .navbar-brand {
        color: #fff;
        font-size: 24px;
    }
}
</style>
