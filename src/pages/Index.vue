<template>
  <div>
    <v-carousel cycle hide-delimiters :height="`${height}px`">
      <v-carousel-item
      
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-hover v-slot="{ hover }">
      <g-link to="/Shop" class="link btnlnk">
        <v-btn
          x-large
          :color="hover ? '#fff' : '#fa5b2f'"
          dark
          class="btnShop px-15"
          :class="hover ? 'btnorange--text' : 'white--text'"
        >
          SHOP NOW
        </v-btn>
      </g-link>
    </v-hover>
    <v-container class="d-flex flex-column pa-0 align-center">
      <h2 class="openSans mt-10">Featured</h2>
      <v-layout row wrap justify-space-around class="layout mt-5 mb-2">
        <v-flex
          xs12
          sm6
          md4
          class="flx d-flex justify-center align-center"
          v-for="(product, i) in products"
          :key="i"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              elevation="2"
              :height="hover ? '95%' : '92%'"
              :width="hover ? '95%' : '92%'"
              class="trans mt-3 card d-flex justify-center align-center"
              :class="{ fltrShadow: hover }"
            >
              <v-img height="100%" width="100%" :src="product.src"></v-img>
              <div
                :class="{ fltr: hover }"
                class="fltrSize d-flex justify-center align-center"
              >
                <g-link
                  to="/"
                  class="shopLink white--text"
                  :class="{ 'd-flex': hover }"
                  >Shop Now</g-link
                >
              </div>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-footer padless color="#d2d2d2" class="foot pa-1 d-flex justify-center">
      <label class="lbl noselect">© Copyright 2021 Shop@gmail.com</label>
    </v-footer>
  </div>
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
          src:
            "https://materiaalkundea244cricketball.files.wordpress.com/2015/09/cropped-cricket_ball_by_hedgehog_the_hermit-d6sqiom.jpg?w=900",
        },
        {
          src:
            "https://i.guim.co.uk/img/media/6a103827889d93363dc6d5539ea31658641007ef/0_65_3000_1800/master/3000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6b399c3845339f2acec757d545b8832f",
        },
        {
          src:
            "https://static.sportzbusiness.com/uploads/2019/05/Racket-and-Shuttle.jpg",
        },
        {
          src:
            "https://images.indianexpress.com/2019/02/mi-mens-sports-shoes-2-759.jpg",
        },
        {
          src:
            "https://5.imimg.com/data5/CR/OL/NO/ANDROID-36904487/img-20181220-wa0001-jpg-500x500.jpg",
        },
        {
          src:
            "https://www.observerbd.com/2020/10/15/observerbd.com_1602783281.jpg",
        },
      ],
      brands: [
        {
          src:
            "https://img2.goodfon.com/wallpaper/nbig/3/1b/nike-nayk-zheltyy-fon-logo.jpg",
        },
        {
          src:
            "https://www.logaster.com/blog/wp-content/uploads/2020/03/the-3rt-logo.jpg",
        },
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOoHJT9sR4IrhZse0gZGvF9moiMp_hlvgPg&usqp=CAU",
        },
        {
          src:
            "https://www.forbesindia.com/media/images/2020/Sep/img_142769_900x600(1).jpg",
        },
        {
          src:
            "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/321451_v2.jpg",
        },
        {
          src: "https://www.logodesignlove.com/images/sports/asics-logo.gif",
        },
      ],
      height: 100,
    };
  },
  mounted() {
    let appBar = 64;
    this.height = screen.height - appBar - 140;
    // console.log(this.height);
    // setInterval(function(){  }, 5000);
  },
};
</script>

<style scoped>
.btnlnk {
  position: absolute;
  margin-top: -150px;
  left: 50%;
  transform: translateX(-50%);
  
}
.btnShop{
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
.lbl {
  color: #5e5252de;
  font-size: 12px;
}
.fltrShadow {
  filter: drop-shadow(0px 0px 10px gray);
}
.card {
  border-radius: 0px !important;
}
.shopLink {
  display: none;
  position: absolute;
  text-decoration: none;
  font-size: 22px;
  font-weight: bolder;
  letter-spacing: 3px;
}
.fltr {
  background-color: rgba(0, 0, 0, 0.397);
}
.fltrSize {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.3s;
}
h2{
  letter-spacing: 5px;
}
</style>
