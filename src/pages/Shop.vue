<template>
  <div style="min-height: calc(100vh - 56px)">
    <v-btn
      class="filterButton abs d-sticky mx-2 d-md-none"
      fab
      dark
      color="#bd75ca"
      @click="filterOpen = !filterOpen"
    >
      <v-icon dark>
        {{ filterOpen ? "mdi-filter" : "mdi-filter-outline" }}
      </v-icon>
    </v-btn>

    <div class="d-none d-md-block pa-1">
      <v-card class="pa-1" style="width: 250px">
        <v-card-title class="noselect px-2 py-2">Filters</v-card-title>
        <v-divider class="mx-2" />
        <v-list-item-group
          v-for="(Filter, m) in filters"
          :key="m"
          active-class="deep-purple--text"
        >
          <v-list-item-subtitle class="noselect px-4 mt-3 grey--text">{{
            Filter.title
          }}</v-list-item-subtitle>
          <v-list-item
            v-for="Itm in Filter.items"
            :key="Itm"
            class="rounded-lg"
          >
            <span>{{ Itm }}</span>
          </v-list-item>
          <v-divider class="mx-2 mt-1" />
        </v-list-item-group>
      </v-card>
    </div>

    <div
      class="trans white d-md-none"
      :style="`${filterOpen ? 'height: 350px;' : 'height: 0px;'}width:100%;`"
      style="
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.1);
        overflow: auto;
      "
    >
      <div class="ma-1">
        <div v-for="(filter, i) in filters" :key="i">
          <v-subheader>{{ filter.title }}</v-subheader>
          <div>
            <v-chip-group
              :multiple="filter.mult"
              column
              v-model="filter.selected"
              class="px-2"
            >
              <v-chip filter outlined v-for="it in filter.items" :key="it">
                {{ it }}
              </v-chip>
            </v-chip-group>


            <v-card flat color="transparent" v-if="filter.title == 'Price'">
              <v-subheader
                >Min and max price
                <v-switch
                class="ml-2"
                color="#bd75ca"
                  v-model="filter.MaM"
                ></v-switch
              ></v-subheader>

              <v-card-text>
                <v-row>
                  <v-col class="px-0">
                    <v-range-slider
                      v-model="filter.range"
                      :max="filter.max"
                      :min="filter.min"
                      :disabled="priceAbove(filter.MaM, filter.above)"
                      color="#bd75ca"
                      track-color="#eccef2"
                      hide-details
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-icon small>mdi-currency-inr</v-icon>
                        <v-text-field
                          :value="filter.range[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          color="#bd75ca"
                          type="number"
                          style="width: 60px"
                          @change="$set(filter.range, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-icon small>mdi-currency-inr</v-icon>
                        <v-text-field
                          :value="filter.range[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          color="#bd75ca"
                          style="width: 60px"
                          @change="$set(filter.range, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-subheader
                >Above {{filter.max}}
                <v-switch
                class="ml-2"
                color="#bd75ca"
                :disabled="!filter.MaM"
                  v-model="filter.above"
                ></v-switch
              ></v-subheader>
            </v-card>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Shop",
  },
  data() {
    return {
      page: "shop",
      filterOpen: false,
      filters: [
        {
          title: "Brand",
          items: ["Nike", "Rebook"],
          mult: true,
          selected: [],
        },
        {
          title: "Price",
          items: ["Low to high", "High to low"],
          mult: false,
          MaM:false,
          above: false,
          min: 0,
          max: 10000,
          range: [1000, 7000],
          selected: [],
        },
        {
          title: "Sort",
          items: ["Asc", "Dsc"],
          mult: false,
          selected: [],
        },
      ],
    };
  },
  mounted() {
    this.$emit("page", this.page);
  },
  methods: {
    priceAbove: function(val1, val2){
      if(val1 && !val2)
      return false;
      else return true;
    }
  },
};
</script>

<style scoped>
.filterButton {
  right: 5px;
  bottom: 15px;
}
</style>