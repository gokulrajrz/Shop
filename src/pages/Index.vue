<template>
  <Layout>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-hover>
      <v-btn x-large color="#fa5b2f" dark class="btnShop px-15">
        SHOP NOW
      </v-btn>
    </v-hover>
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
    };
  },
};
</script>

<style>
.btnShop {
  position: absolute;
  margin-top: -100px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
