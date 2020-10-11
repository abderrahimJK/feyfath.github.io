<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- it could be Text slides with image -->
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100 h-100"
          width="1024"
          height="480"
          src="../assets/wp1.jpg"
          alt="image slot"
        />
      </template>
      <h1>hello there1</h1>
    </b-carousel-slide>

    <!-- Slides could be with custom text -->
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100 h-100"
          width="1024"
          height="480"
          src="../assets/wp2.jpg"
          alt="image slot"
        />
      </template>
      <h1>hello there2</h1>
    </b-carousel-slide>

    <!-- Slides can be with image only -->
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100 h-100"
          width="1024"
          height="480"
          src="../assets/wp3.jpg"
          alt="image slot"
        />
      </template>
      <h1>hello there3</h1>
    </b-carousel-slide>

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <b-carousel-slide>
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100 h-100"
          width="1024"
          height="480"
          src="../assets/wp4.jpg"
          alt="image slot"
        />
      </template>
      <h1>hello there4</h1>
    </b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
        pellentesque ut lacus vel interdum.
      </p>
    </b-carousel-slide>
  </b-carousel>
</template>
<script>
export default {};
</script>
<style scoped>
.carousel-item {
  height: 25rem;
}
</style>