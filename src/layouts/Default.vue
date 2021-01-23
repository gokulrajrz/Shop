<template>
  <v-app class="site">
    <v-app-bar app sticky color="white" id="navBar">
      <v-app-bar-nav-icon
        @click="drawerOpen = !drawerOpen"
        class="d-md-none"
        color="grey"
      ></v-app-bar-nav-icon>
      <g-link :to="`/${pages[0]}`" class="d-none d-md-flex">
        <g-image
          src="~/assets/shop.jpg"
          height="50px"
          width="50px"
          class="rounded-circle noselect"
        ></g-image>
      </g-link>

      <v-toolbar-title class="title" @click="drawerOpen = false">
        <g-link :to="`/${pages[0]}`" class="link noselect hachi" style="color: #171717" 
        @click="drawerOpen = false">{{
          $static.metadata.siteName
        }}</g-link>
      </v-toolbar-title>

      <v-spacer />

      <v-tooltip bottom color="rgba(140, 0, 179,0.5)">
        <template v-slot:activator="{ on, attrs }">
          <g-link :to="`/${pages[0]}`" class="link d-none d-md-flex">
            <v-hover v-slot="{ hover }">
              <v-btn
                plain
                class="ml-2 px-5 trans"
                :class="{ iconHov: hover }"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-home-outline</v-icon>
              </v-btn>
            </v-hover>
          </g-link>
        </template>
        <span>Home</span>
      </v-tooltip>

      <v-tooltip bottom color="rgba(140, 0, 179,0.5)">
        <template v-slot:activator="{ on, attrs }">
          <g-link :to="`/${pages[1]}`" class="link d-none d-md-flex">
            <v-hover v-slot="{ hover }">
              <v-btn
                plain
                class="ml-2 px-5 trans"
                :class="{ iconHov: hover }"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-store-outline</v-icon>
              </v-btn>
            </v-hover>
          </g-link>
        </template>
        <span>Shop</span>
      </v-tooltip>

      <v-tooltip bottom color="rgba(140, 0, 179,0.5)">
        <template v-slot:activator="{ on, attrs }">
          <g-link :to="`/${pages[2]}`" class="link d-none d-md-flex">
            <v-hover v-slot="{ hover }">
              <v-btn
                plain
                class="ml-2 px-5 trans"
                :class="{ iconHov: hover }"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </v-hover>
          </g-link>
        </template>
        <span>About Us</span>
      </v-tooltip>

      <!-- clear localstorage -->

      <!-- <v-btn plain class="ml-2 px-5 trans" icon @click.prevent="clearStorage()">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn> -->

      <!-- -------------------- -->

      <v-tooltip bottom color="rgba(140, 0, 179,0.5)">
        <template v-slot:activator="{ on, attrs }">
          <g-link :to="`/${pages[3]}`" class="link">
            <v-hover v-slot="{ hover }">
              <v-btn
                plain
                class="ml-2 px-5 trans"
                :class="{ iconHov: hover }"
                icon
                v-bind="attrs"
                v-on="on"
                 @click="drawerOpen = false"
              >
                <v-icon>mdi-cart-outline</v-icon>
                <span
                  v-if="count"
                  class="abs countTag purple white--text rounded-circle 
                  animate__animated animate__bounceIn"
                  >{{ count }}</span
                >
              </v-btn>
            </v-hover>
          </g-link>
        </template>
        <span>Cart</span>
      </v-tooltip>
    </v-app-bar>

    <div class="relative">

      <Drawer
        :style="`width: 100%; z-index:4;margin-top:${drawerMarg}px;
        height:calc(100vh - ${drawerMarg}px);
        position:fixed;`"
        class="d-block d-md-none"
        :drawer="drawerOpen"
        :pages="pages"
        :page="page"
        @status="drawerOpen = false"
        :class="[{'poEvnts-none': !drawerOpen}]"
      ></Drawer>

      <v-main class="mainBdy">
        <slot />
      </v-main>
    </div>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Drawer from "../components/drawer.vue";

export default {
  data: () => ({
    drawerMarg: 0,
    drawerOpen: false,
    pages: ['','shop','about','cart'],
    items: [
      {
        name: "shirt",
        quantity: 2,
        stock: 10,
        price: 100,
        brand: "nike",
        src:
          "https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg",
      },
      {
        name: "shirt travel",
        quantity: 5,
        stock: 10,
        price: 120,
        brand: "adidas",
        src:
          "https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg",
      },
      {
        name: "shirt travel",
        quantity: 4,
        stock: 10,
        price: 90,
        brand: "adidas",
        src:
          "https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg",
      },
    ],
    count: 0,
  }),
  props: [
    'page'
  ],
  mounted() {
    this.drawerMarg = document.querySelector("#navBar").clientHeight;
    // console.log(this.$refs.drawBg);
    // this.$refs.drawBg.style.backgroundColor = "rgba(156,39,176,0.3)";

    if (!localStorage.getItem("items")) {
      localStorage.setItem("items", JSON.stringify(this.items));
      // console.log('item not exists');
    } else {
      // console.log("item exists");
      if (!JSON.parse(window.localStorage.getItem("items")).length) {
        // console.log("qwr");
        localStorage.setItem("items", JSON.stringify(this.items));
      } else {
        this.items = JSON.parse(window.localStorage.getItem("items"));
      }
    }
    this.count = this.items.length;
    setInterval(() => {
      this.count = JSON.parse(window.localStorage.getItem("items")).length;
      this.drawerMarg = document.querySelector("#navBar").clientHeight;
    }, 200);
  },
  methods: {
    clearStorage() {
      // localStorage.clear();
    },
  },
  components: {
    Drawer,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  box-sizing: border-box;
}

.site {
  overflow-x: hidden;
}

.link {
  text-decoration: none;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
}
.openSans {
  font-family: "Open Sans";
}
.mainBdy {
  background-color: #f5f5f5;
}
.iconHov {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
  background-color: #f5f5f5;
}
.trans {
  transition: all 0.3s;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.hachi {
  font-family: "Hachi Maru Pop";
}
.abs {
  position: absolute;
}
.relative {
  position: relative;
}
.countTag {
  font-size: 9px;
  margin-right: -30px;
  padding: 2px;
}
.poEvnts-none{
  pointer-events: none;
}
</style>
