<template>
  <Layout :page="page">
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounceInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown "
      mode="out-in"
    >
      <router-view @page="currentPage" />
    </transition>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
  data() {
    return{
      page: 'app'
    }
  },
  methods: {
    currentPage: function (p) {
      this.page = p;
      // console.log(p);
    },
  },
};
</script>

<style scoped>
</style>