<template>
  <div>
    <!-------------- my header Component ----------------->
    <headerComponent></headerComponent>
    <!-------------- /my header Component ----------------->
    <div class="d-flex">
      <div class="mx-auto mt-2">
        <!--------------Anouncement Component----------------->
        <anouncementComponent></anouncementComponent>
        <!--------------/Anouncement Component----------------->
        <!---------- ---Courses Grid Coponent----------------->
        <lessonsComponent></lessonsComponent>
        <!---------- ---/Courses Grid Coponent----------------->
      </div>
      <div class="d-lg-block d-none w-25 mx-auto mt-5 mt-lg-5">
        <latestComponent></latestComponent>
      </div>
    </div>
    <!--------------my footer Component------------------->
    <footerComponent></footerComponent>
    <!--------------/my footer Component------------------->
  </div>
</template>
<script>
import headerComponent from "@/components/headerComponent.vue";
import footerComponent from "@/components/footerComponent.vue";
import lessonsComponent from "@/components/lessonsComponent.vue";
import anouncementComponent from "@/components/anouncementComponent.vue";
import latestComponent from "@/components/latestComponent.vue";

export default {
  components: {
    footerComponent,
    headerComponent,
    lessonsComponent,
    anouncementComponent,
    latestComponent
  }
};
</script>
