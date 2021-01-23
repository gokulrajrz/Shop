<template>
  <div>
    <h1>Shop</h1>
  </div>
</template>

<script scoped>
export default {
  metaInfo: {
    title: "Shop",
  },
  data(){
    return{
      page: "shop",
    }
  },
  mounted(){
    this.$emit('page',this.page);
  }
};
</script>
