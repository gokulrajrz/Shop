<template>
  <v-app class="site">
    <v-app-bar app sticky color="white">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-md-none"
        color="grey"
      ></v-app-bar-nav-icon>
      <g-link to="/" class="d-none d-md-flex">
        <g-image
          src="~/assets/shop.jpg"
          height="50px"
          width="50px"
          class="rounded-circle noselect"
        ></g-image>
      </g-link>

      <v-toolbar-title class="title">
        <g-link to="/" class="link noselect hachi" style="color: #171717">{{
          $static.metadata.siteName
        }}</g-link>
      </v-toolbar-title>

      <v-spacer />

      <v-tooltip bottom color="rgba(140, 0, 179,0.5)">
        <template v-slot:activator="{ on, attrs }">
          <g-link to="/" class="link d-none d-md-flex">
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
          <g-link to="/shop" class="link d-none d-md-flex">
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
          <g-link to="/about" class="link d-none d-md-flex">
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
          <g-link to="/Cart" class="link">
            <v-hover v-slot="{ hover }">
              <v-btn
                plain
                class="ml-2 px-5 trans"
                :class="{ iconHov: hover }"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-cart-outline</v-icon>
                <span
                  v-if="count"
                  class="abs countTag purple white--text rounded-circle animate__animated animate__bounceIn"
                  >{{ count }}</span
                >
              </v-btn>
            </v-hover>
          </g-link>
        </template>
        <span>Cart</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <div class="drawerHead d-flex justify-center align-center">
          <span class="drawerHeading openSans purple--text">{{
            $static.metadata.siteName
          }}</span>
        </div>
        <v-divider class="mx-3" />
        <v-list-item-group
          v-model="group"
          class="mt-2"
          active-class="deep-purple--text text--accent-4"
        >
          <g-link to="/" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><span class="drawerItem">Home</span></v-list-item-title
              >
            </v-list-item>
          </g-link>

          <g-link to="/Shop" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-store-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><span class="drawerItem">Store</span></v-list-item-title
              >
            </v-list-item>
          </g-link>

          <g-link to="/About" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                ><span class="drawerItem">About Us</span></v-list-item-title
              >
            </v-list-item>
          </g-link>
        </v-list-item-group>
      </v-list>
      <div class="pow d-flex justify-center align-center abs py-3 white--text openSans">
        <span>Powered By RRRRRR</span>
      </div>
    </v-navigation-drawer>

    <v-main class="mainBdy">
      <slot />
    </v-main>
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
export default {
  data: () => ({
    drawer: false,
    group: null,
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
  mounted() {
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
    }, 200);
  },
  methods: {
    clearStorage() {
      localStorage.clear();
    },
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
.drawerHead {
  width: 100%;
  height: 75px;
}
.drawerHeading {
  letter-spacing: 3px;
  font-size: 20px;
}
.drawerItem {
  font-size: 15px;
  font-weight: 300;
}
.pow {
  width: 100%;
  bottom: 0;
  font-size: 12px;
  background-color: rgba(186,85,211,0.5);
}
</style>
