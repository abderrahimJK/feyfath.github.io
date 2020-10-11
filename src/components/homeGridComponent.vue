<template>
  <div>
    <carouselComponent></carouselComponent>
    <!-- "School Def/Pre slide" starts Here-->
    <div class="pre_slide d-flex">
      <div class="school_def">
        <b-jumbotron style="background: #fff; padding: 0 2rem;">
          <template v-slot:header>
            <div class="def_title">
              <h2>Notre Etablissement</h2>
              <class class="sub_title"></class>
            </div>
          </template>

          <template v-slot:lead>
            <div class="def_conetent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quos laudantium non fuga vel, quo harum nam neque natus dicta
              distinctio ex dignissimos, officia culpa vero dolorum iusto
              necessitatibus! Minima. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quos laudantium non fuga vel, quo harum nam neque natus dicta
              distinctio ex dignissimos, officia culpa vero dolorum iusto
              necessitatibus! Minima. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              iusto ipsum quisquam aperiam quibusdam necessitatibus nemo quidem
              culpa, fugit quo labore odio maiores itaque error animi eveniet
              aliquid dolorem qui. necessitatibus! Minima. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              iusto ipsum quisquam aperiam quibusdam necessitatibus nemo quidem
              culpa, fugit quo labore odio maiores itaque error animi eveniet
              aliquid dolorem qui.necessitatibus! Minima. <br />
            </div>
          </template>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </b-jumbotron>
      </div>
      <latestComponent></latestComponent>
    </div>
    <b-jumbotron style="background:#fff; padding: 0 2rem;">
      <template v-slot:header>
        <div class="def_title">
          <h2>Pourquoi rejoindre le Lycee Technique</h2>
          <class class="sub_title"></class>
        </div>
      </template>
      <template v-slot:lead>
        <div class="def_conetent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quos laudantium non fuga vel, quo harum nam neque natus dicta
          distinctio ex dignissimos, officia culpa vero dolorum iusto
          necessitatibus! Minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore quos laudantium non fuga vel, quo harum
          nam neque natus dicta distinctio ex dignissimos, officia culpa vero
          dolorum iusto necessitatibus! Minima. necessitatibus! Minima. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quos laudantium non fuga vel, quo harum nam neque natus dicta
          distinctio ex dignissimos, officia culpa vero dolorum iusto
          necessitatibus! Minima.
        </div>
      </template>
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </b-jumbotron>
    <mapComponent></mapComponent>
  </div>
</template>
<script>
import mapComponent from "@/components/mapComponent.vue";
import latestComponent from "@/components/latestComponent.vue";
import carouselComponent from "@/components/carouselComponent.vue";

export default {
  components: {
    mapComponent,
    latestComponent,
    carouselComponent
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
<style>
.pre_slide.d-flex {
  padding: 1rem;
  grid-column-gap: 1.6rem;
}
@media screen and (max-width: 1200px) {
  .pre_slide.d-flex {
    flex-direction: column;
  }
}

/* the div under sub titles*/
.sub_title {
  display: inline-block;
  padding: 4px 40px;
  width: fit-content;
  background: #007bff;
  margin: 7px 0 20px 0;
  border-radius: 7px;
}
.def_title {
  display: flex;
  flex-direction: column;
}
</style>
