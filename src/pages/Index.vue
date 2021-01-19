<template>
  <Layout>
    <v-carousel hide-delimiters :height="`${height}px`">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-hover v-slot="{ hover }">
      <v-btn
        x-large
        :color="hover ? '#fff' : '#fa5b2f'"
        dark
        class="btnShop px-15"
        :class="hover ? 'btnorange--text' : 'white--text'"
      >
        SHOP NOW
      </v-btn>
    </v-hover>
    <v-container class="d-flex flex-column pa-0 align-center">
      <h2 class="mt-10">Featured</h2>
      <v-layout row wrap justify-space-around class="layout mt-5 mb-2">
        <v-flex
          xs12
          sm6
          md4
          class="flx d-flex justify-center align-center"
          v-for="(product , i) in products"
          :key="i"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              elevation="2"
              outlined
              :height="hover ? '95%' : '92%'"
              :width="hover ? '95%' : '92%'"
              class="trans mt-3"
            >
              <v-img
                height="100%"
                width="100%"
                src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
              ></v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer outlined padless> dfgdgh </v-footer>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "index",
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      products: [
        {
          src: "~/img/6.jpg",
        },
        {
          src: "~/img/6.jpg",
        },
        {
          src: "~/img/6.jpg",
        },
        {
          src: "~/img/6.jpg",
        },
        {
          src: "~/img/6.jpg",
        },
        {
          src: "~/img/6.jpg",
        },
      ],
      height: 100,
    };
  },
  mounted() {
    let appBar = 64;
    this.height = screen.height - appBar - 140;
    // console.log(this.height);
  },
};
</script>

<style>
.btnShop {
  position: absolute;
  margin-top: -150px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;
  border-radius: 0;
  letter-spacing: 5px;
}
.layout {
  width: 100%;
}
.flx {
  height: 350px;
}
.trans {
  transition: 0.2s;
}
</style>
