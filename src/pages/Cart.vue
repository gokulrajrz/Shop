<template>
  <div>
    <v-container>
      <h1 class="openSans text-center mt-5 mb-5">Shopping Bag</h1>
      <v-layout row wrap>
        <v-flex xs12 md8 class="pa-5">
          <v-card class="white pa-5 rounded-lg trans">
            <h3 class="openSans noselect font-weight-medium mb-3">
              Items in your Bag ( {{ items.length }} Item{{
                (s = items.length > 1 ? "s" : "")
              }}
              )
            </h3>
            <v-divider></v-divider>
            <div
              v-if="!items.length"
              class="emptyCart d-flex justify-center align-center flex-column py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="220"
                height="220"
                viewBox="0 0 220 220"
                class="animate__animated animate__bounceIn"
              >
                <defs>
                  <path
                    id="a"
                    d="M0 14.119c0 7.666 29.992 13.882 66.988 13.882 36.996 0 66.988-6.216 66.988-13.882 0-7.668-29.992-13.883-66.988-13.883C29.992.236 0 6.451 0 14.119z"
                  />
                  <path
                    id="c"
                    d="M.999 13.793c0 8.526 6.74 15.443 15.047 15.443 6.32 0 11.732-4.006 13.953-9.682a14.604 14.604 0 0 1-7.203 1.888c-8.308 0-15.047-6.917-15.047-15.445 0-2.037.388-3.983 1.091-5.761C4.167 2.851.999 7.944.999 13.793z"
                  />
                  <path
                    id="e"
                    d="M0 13.793c0 8.526 6.739 15.443 15.046 15.443 6.321 0 11.732-4.006 13.953-9.682a14.604 14.604 0 0 1-7.203 1.888c-8.308 0-15.046-6.917-15.046-15.445 0-2.037.387-3.983 1.09-5.761C3.167 2.851 0 7.944 0 13.793z"
                  />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(39 167.764)">
                    <mask id="b" fill="#fff">
                      <use xlink:href="#a" />
                    </mask>
                    <path
                      fill="#F7F7F7"
                      d="M-5 33h143.977V-4.765H-5z"
                      mask="url(#b)"
                    />
                  </g>
                  <g transform="translate(39 143.764)">
                    <mask id="d" fill="#fff">
                      <use xlink:href="#c" />
                    </mask>
                    <path
                      fill="#D1ECEE"
                      d="M-4 34.236h39v-39H-4z"
                      mask="url(#d)"
                    />
                  </g>
                  <path
                    fill="#D1ECEE"
                    d="M172.13 90.703L163.791 118 75 119.579 63.003 85.005z"
                  />
                  <g transform="translate(129 143.764)">
                    <mask id="f" fill="#fff">
                      <use xlink:href="#e" />
                    </mask>
                    <path
                      fill="#D1ECEE"
                      d="M-5 34.236h39v-39H-5z"
                      mask="url(#f)"
                    />
                  </g>
                  <path
                    stroke="#504174"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    d="M29 30l17 6 29 83.58L63.567 145M126.936 160.5H69m103.732 0H160"
                  />
                  <g stroke="#504174" stroke-linejoin="round" stroke-width="6">
                    <path
                      stroke-linecap="round"
                      d="M69 159c0 7.732-6.268 14-14 14-7.731 0-14-6.268-14-14s6.269-14 14-14c7.732 0 14 6.268 14 14zM158 159c0 7.732-6.268 14-14 14-7.731 0-14-6.268-14-14s6.269-14 14-14c7.732 0 14 6.268 14 14z"
                    />
                    <path
                      d="M75 118h88.792l17.718-58L50.792 50M148.49 118L161 58.355M133.474 118l6.025-61.231M118.458 118L118 55.183M103.441 118L96.5 53.597M88.424 118L75 52.01"
                    />
                  </g>
                  <g transform="translate(131 23)">
                    <circle
                      cx="32"
                      cy="32"
                      r="32"
                      fill="#FFF"
                      fill-rule="nonzero"
                      stroke="#504174"
                      stroke-width="6"
                    />
                    <path
                      fill="#513F75"
                      d="M40.037 32.292c0 3.74-.613 6.509-1.839 8.306-1.225 1.797-3.112 2.695-5.661 2.695-2.47 0-4.334-.928-5.589-2.783-1.254-1.856-1.882-4.595-1.882-8.218 0-3.78.61-6.565 1.831-8.357 1.22-1.792 3.1-2.688 5.64-2.688 2.47 0 4.338.938 5.603 2.813 1.264 1.875 1.897 4.619 1.897 8.232zm-10.474 0c0 2.627.227 4.51.681 5.647.454 1.138 1.219 1.707 2.293 1.707 1.054 0 1.816-.577 2.285-1.729.469-1.152.703-3.027.703-5.625 0-2.627-.237-4.514-.71-5.662-.474-1.147-1.233-1.72-2.278-1.72-1.065 0-1.826.573-2.285 1.72-.46 1.148-.689 3.035-.689 5.662z"
                    />
                  </g>
                </g>
              </svg>

              <p class="noselect">Your Cart is Empty!</p>
            </div>

            <div v-show="items.length">
              <div v-for="(item, i) in items" :key="i">
                <div
                  class="item mt-3 d-flex align-center flex-column flex-sm-row"
                >
                  <v-img
                    max-width="100%"
                    max-height="100%"
                    :src="item.src"
                    class="rounded-lg relative itemImg"
                  ></v-img>
                  <div
                    class="itemDetails relative align-self-start d-flex flex-column mt-3 mt-sm-0 pl-2 pl-sm-0"
                  >
                    <h3
                      class="openSans"
                      style="font-weight: 500; font-size: 24px"
                    >
                      {{ item.name }}
                    </h3>
                    <p>Brand : {{ item.brand }}</p>
                    <div class="abs" style="bottom: 0">
                      <v-hover v-slot="{ hover }">
                      <div class="rmBorder pa-1 rounded-lg" v-ripple @click.prevent="items.splice(i,1)">
                        <v-icon class="trans">{{hover ? 'mdi-delete':'mdi-delete-outline'}}</v-icon>
                        <label class="noselect" style="pointer-events:none">Remove this item</label>
                      </div>
                      </v-hover>
                    </div>
                    <div class="qty rounded-pill mt-1 abs" style="right: 0">
                      <v-btn
                        icon
                        @click.prevent="
                          item.quantity > 1 ? item.quantity-- : item.quantity
                        "
                        ><v-icon>mdi-minus</v-icon></v-btn
                      >
                      <label class="px-2 noselect">{{ item.quantity }}</label>
                      <v-btn
                        icon
                        @click.prevent="
                          item.quantity < item.stock
                            ? item.quantity++
                            : item.quantity
                        "
                        ><v-icon>mdi-plus</v-icon></v-btn
                      >
                    </div>
                    <label
                      class="abs openSans mr-2"
                      style="
                        right: 0;
                        bottom: 0;
                        font-weight: 600;
                        font-size: 22px;
                      "
                      >Rs.{{ item.price }}</label
                    >
                  </div>
                </div>
                <v-divider
                  v-if="i < items.length - 1"
                  class="divider1 my-5"
                ></v-divider>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 class="pa-5" style="position: relative">
          <v-card
            class="white pa-5 rounded-lg trans"
            style="position: relative"
          >
            <h3 class="openSans noselect font-weight-medium mb-3">
              Your Billing
            </h3>
            <v-divider></v-divider>
            <div class="py-3">
              <div
                v-if="!items.length"
                class="d-flex justify-center align-center"
              >
                <label class="noselect">No item in your Bag.</label>
              </div>
              <div v-show="items.length">
                <div class="pa-1 d-flex relative" v-for="(item, i) in items" :key="i">
                  <label>{{item.name}}</label><v-spacer/>
                  <label>{{item.price * item.quantity}}</label>
                </div>
              </div>
            </div>
            <v-divider />
            <div class="amtDiv d-flex pt-3">
              <p class="noselect mb-0">Total Amount</p>
              <p class="amount mb-0">Rs.{{ totalPrice() }}</p>
            </div>
            <v-btn
              block
              :disabled="!items.length"
              color="green"
              class="mt-5 white--text"
              @click.prevent=""
              >Checkout</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: "Cart",
  },
  data() {
    return {
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
        },{
          name: "shirt travel",
          quantity: 4,
          stock: 10,
          price: 90,
          brand: "adidas",
          src:
            "https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg",
        },
      ],
      s: "",
      amount: 0,
    };
  },
  methods:{
    totalPrice: function () {
      let amount = 0;
      this.items.forEach((item , i) => {
        amount += (item.price * item.quantity);
        // console.log(amount);
      });
      return amount;
    }
  },
  mounted(){

  }
};
</script>

<style scoped>
.emptyCart {
  width: 100%;
  min-height: 250px;
}
.amtDiv {
  position: relative;
  width: 100%;
}
.amount {
  position: absolute;
  right: 0;
}
.itemDetails {
  width: 100%;
  min-height: 100px;
}
.qty {
  border: 1px solid grey;
}
.rmBorder{
  border: 1px solid grey;
  cursor: pointer;
}

@media only screen and (min-width: 600px) {
  .itemDetails {
    margin-left: 16px;
    width: calc(100% - 146px);
    min-height: 130px;
  }
  .itemImg {
    height: 130px;
    width: 130px;
  }

  .divider1 {
    margin-left: 146px;
  }
}
</style>