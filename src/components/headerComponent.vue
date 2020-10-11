<template>
  <div>
    <!-------------------------------------------->
    <div>
      <b-navbar toggleable="lg" type="dark" style="background: #083a6f;">
        <b-navbar-brand href="#">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="TCT" left class="ml-2">
              <b-dropdown-item href="#">Lessons</b-dropdown-item>
              <b-dropdown-item href="#">Anouncements</b-dropdown-item>
              <b-dropdown-item href="#">Latest News</b-dropdown-item>
              <b-dropdown-item href="#">Consult Experts</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="BTS" left class="ml-2 _branches">
              <b-dropdown-item href="#">Lessons</b-dropdown-item>
              <b-dropdown-item href="#">Anouncements</b-dropdown-item>
              <b-dropdown-item href="#">Latest News</b-dropdown-item>
              <b-dropdown-item href="#">Consult Experts</b-dropdown-item>
              <b-dropdown-item href="#">Bourse</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="1BAC" left class="ml-2">
              <b-dropdown-item href="#">Lessons</b-dropdown-item>
              <b-dropdown-item href="#">Anouncements</b-dropdown-item>
              <b-dropdown-item href="#">Latest News</b-dropdown-item>
              <b-dropdown-item href="#">Consult Experts</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="2BAC" left class="ml-2">
              <b-dropdown-item href="#">Lessons</b-dropdown-item>
              <b-dropdown-item href="#">Anouncements</b-dropdown-item>
              <b-dropdown-item href="#">Latest News</b-dropdown-item>
              <b-dropdown-item href="#">Consult Experts</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="TCT" left class="ml-2">
              <b-dropdown-item href="#">Lessons</b-dropdown-item>
              <b-dropdown-item href="#">Anouncements</b-dropdown-item>
              <b-dropdown-item href="#">Latest News</b-dropdown-item>
              <b-dropdown-item href="#">Consult Experts</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerComponent",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar_links {
  background-color: #083a6f;
}
.nav-item a {
  color: #fff !important;
}
</style>