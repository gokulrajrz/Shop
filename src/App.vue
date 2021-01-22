<template>
  <Layout>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounceInRight animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown "
      mode="out-in"
    >
      <router-view />
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
};
</script>

<style scoped>
</style>