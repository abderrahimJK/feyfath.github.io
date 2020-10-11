<template>
  <div class="outer_anounce">
    <h1>Announcements</h1>
    <div class="inner_anounce anounce_grid">
      <div class="slider_first_anc d-flex">
        <div class="anc_slider w-100">
          <carouselComponent></carouselComponent>
        </div>
        <div class="first_anounce">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
      </div>

      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>

      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>

      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>
<script>
import carouselComponent from "@/components/carouselComponent";
export default {
  components: {
    carouselComponent
  }
};
</script>
<style scoped>
.outer_anounce {
  max-width: 60rem;
  margin: 20px auto;
  width: 100%;
  overflow: hidden;
}
.slider_first_anc {
  grid-column: 1 / 3;
}

.announce_grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  background: white;
  padding: 3rem;
}
@media screen and (min-width: 550px) {
  .anounce_grid {
    background: rgb(214 214 214 / 25%);
    border-radius: 10px;
    display: grid;
    grid-gap: 10px !important;
    grid-template-rows: repeat(5, auto);
  }
}
@media screen and (max-width: 600px) {
  .d-flex {
    flex-direction: column;
  }
  .d-flex div {
    width: 100% !important;
  }
}

.card {
  grid-gap: 2rem;
}
.first_anounce {
  text-align: center;
  text-align: -webkit-center;
  width: 100%;
}
.first_anounce div article {
  display: inline;
}
</style>