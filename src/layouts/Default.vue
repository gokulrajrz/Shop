<template>
  <v-app>
    <v-app-bar app sticky color="white">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-md-none"
        color="grey"
      ></v-app-bar-nav-icon>
      <v-icon color="blue" medium class="d-none d-md-flex">Logo</v-icon>

      <v-toolbar-title class="title">
        <g-link to="/" class="link" style="color: #171717">Shop Name</g-link>
      </v-toolbar-title>

      <v-spacer />

      <g-link to="/" class="link d-none d-md-flex">
        <v-btn elevation="1" plain class="ml-2 px-5">Home</v-btn>
      </g-link>
      <g-link to="/shop/" class="link d-none d-md-flex">
        <v-btn elevation="1" plain class="ml-2 px-5">Shop</v-btn>
      </g-link>
      <g-link to="/about/" class="link d-none d-md-flex">
        <v-btn elevation="1" plain class="ml-2 px-5">About</v-btn>
      </g-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
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

.link {
  text-decoration: none;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
}
.mainBdy{
  background-color: #f5f5f5;
}
</style>
