<template>
  <v-container>
    <v-layout row wrap class="shadow white mt-md-5">
      <v-flex xs12 md6 class="py-3 px-4">
        <h1 class="text-center text-md-left ml-md-2">About us</h1>
        <p class="text-center text-md-left mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <v-layout row wrap class="pa-4">
          <v-flex xs12 sm6 class="d-flex align-start mt-1">
            <v-icon x-large>mdi-map-marker-outline</v-icon>
            <div class="ml-3">
              <h2>Address</h2>
              <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000.</p>
            </div>
          </v-flex>
          <v-flex xs12 sm6 class="d-flex align-start mt-1">
            <v-icon x-large>mdi-clock-time-eight-outline</v-icon>
            <div class="ml-3">
              <h2>Opening Hours</h2>
              <p>Monday to Friday : 8:00 AM to 8:00 PM.</p>
            </div>
          </v-flex>
          <v-flex xs12 sm6 class="d-flex align-start mt-1">
            <v-icon x-large>mdi-phone-outline</v-icon>
            <div class="ml-3">
              <h2>Phone</h2>
              <p>Mobile : +919876543210</p>
            </div>
          </v-flex>
          <v-flex xs12 sm6 class="d-flex align-start mt-1">
            <v-icon x-large>mdi-email-outline</v-icon>
            <div class="ml-3">
              <h2>Email</h2>
              <p>Gmail : shop@gmail.com</p>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-divider class="d-md-none mx-8"></v-divider>
      <v-flex xs12 md6 class="pa-3 text-center text-md-left">
        <v-form @submit.prevent="submit" ref="form" v-model="form">
          <h1>Contact us</h1>
          <v-text-field
            v-model="name"
            :rules="rules.blank"
            color="purple darken-2"
            label="Name"
            outlined
            dense
            required
            class="mt-4"
          ></v-text-field>
          <v-text-field
            v-model="email"
            color="purple darken-2"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            outlined
            dense
          ></v-text-field>
          <v-textarea
            outlined
            name="input-7-4"
            :rules="rules.blank"
            color="purple darken-2"
            label="Message"
            no-resize
            v-model="msg"
          ></v-textarea>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="white--text"
            color="deep-purple accent-4"
            depressed
          >
            Submit
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      page: "about",
      email: "",
      name: "",
      msg: "",
      form: false,
      isLoading: false,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        blank: [(val) => (val || "").length > 0 || "This field is required"],
      },
    };
  },
  mounted(){
    this.$emit('page',this.page);
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1,h2{
  font-family: "Open Sans";
}
</style>