<template>
  <div>
    <div
      style="width: 100%; height: 100%"
      class="abs speed"
      ref="drawBg"
      @click="close"
    ></div>
      <v-list nav dense class="speed abs white pa-0" 
      :style="`width:${width}%;height:100%;margin-left:-${width}%`"
      :class="[{ 'open': drawer }]"
      >

        <div class="drawerHead d-flex justify-center align-center">
          <span class="drawerHeading openSans purple--text">{{
            $static.metadata.siteName
          }}</span>
        </div>
        <v-divider class="mx-5" />
        <v-list-item-group
          class="mt-2  px-3"
        >


          <g-link v-for="(item , i) in listItems" :key="i" :to="`/${item.page}`" class="link">
            <div @click="close()" v-ripple
                class="d-flex px-2 rounded"
                :class="[{'drawerItemColor--text': item.page != page},
                {'deep-purple--text highlightBg': item.page == page}]"
            >
              <v-list-item-icon class="my-2">
                <v-icon :color="item.page == page ? 'deep-purple':'drawerItemColor'">
                    {{item.icon}}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="pa-0"
                ><span class="drawerItem">{{item.title}}</span></v-list-item-title
              >
            </div>
          </g-link>

        
        </v-list-item-group>
        <div
        class="pow d-flex justify-center align-center abs py-3 white--text openSans"
      >
        <span>Powered By RRRRRR</span>
      </div>
      </v-list>
  </div>
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
  name: "drawer",
  props: ["drawer","pages","page"],
  data() {
    return {
      width: 80,
      listItems: [
          {
              page: this.pages[0],
              icon: "mdi-home-outline",
              title: "Home"
          },
          {
              page: this.pages[1],
              icon: "mdi-store-outline",
              title: "Store"
          },
          {
              page: this.pages[2],
              icon: "mdi-information-outline",
              title: "About Us"
          },
        ],
    };
  },
  mounted() {
  },
  watch:{
      drawer: function(val){
        if(val){
            this.$refs.drawBg.style.backgroundColor = "rgba(0,0,0,0.7)";
        }else{
            this.$refs.drawBg.style.backgroundColor = "transparent";
        }
      }
  },
  methods:{
      close(){
          this.$emit('status');
      }
  },
};
</script>

<style scoped>
.open {
  transform: translateX(100%);
}
.speed{
    transition: all 0.2s ease-in-out;
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
  font-weight: 500;
}
.pow {
  width: 100%;
  bottom: 0;
  font-size: 12px;
  background-color: rgba(186, 85, 211, 0.7);
}
.highlightBg{
    background-color: rgba(186, 85, 211, 0.2);
}
</style>