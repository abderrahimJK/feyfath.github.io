<template>
  <div class="home">
    <headerComponent></headerComponent>
    <homeGridComponent></homeGridComponent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import headerComponent from "@/components/headerComponent.vue";
import homeGridComponent from "@/components/homeGridComponent.vue";
import footerComponent from "@/components/footerComponent.vue";

export default {
  name: "Home",
  components: {
    headerComponent,
    homeGridComponent,
    footerComponent
  }
};
</script>
