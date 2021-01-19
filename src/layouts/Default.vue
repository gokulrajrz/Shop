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
        <g-link to="/" class="link noselect hachi" style="color: #171717"
          >Shop Name</g-link
        >
      </v-toolbar-title>

      <v-spacer />

      <g-link to="/" class="link d-none d-md-flex">
        <v-hover v-slot="{ hover }">
          <v-btn plain class="ml-2 px-5 trans" :class="{ iconHov: hover }" icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
        </v-hover>
      </g-link>

      <g-link to="/shop" class="link d-none d-md-flex">
        <v-hover v-slot="{ hover }">
          <v-btn plain class="ml-2 px-5 trans" :class="{ iconHov: hover }" icon>
            <v-icon>mdi-store-outline</v-icon>
          </v-btn>
        </v-hover>
      </g-link>
      <g-link to="/about" class="link d-none d-md-flex">
        <v-hover v-slot="{ hover }">
          <v-btn plain class="ml-2 px-5 trans" :class="{ iconHov: hover }" icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </v-hover>
      </g-link>
      <g-link to="/Cart" class="link">
        <v-hover v-slot="{ hover }">
          <v-btn plain class="ml-2 px-5 trans" :class="{ iconHov: hover }" icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </v-hover>
      </g-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <g-link to="/" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </g-link>

          <g-link to="/Shop" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-store-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Store</v-list-item-title>
            </v-list-item>
          </g-link>

          <g-link to="/About" class="link">
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
          </g-link>
        </v-list-item-group>
      </v-list>
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
  }),
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
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
.openSans{
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
  transition: 0.3s;
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
.hachi{
  font-family: "Hachi Maru Pop";
}
</style>
