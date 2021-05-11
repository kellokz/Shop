<template>
  <div>
    <h3 class="text-uppercase">
      Warenkorb
      <span v-if="cartItems.length > 0">
        ({{ cartQuantity }}Artikel)
        <i
          class="fas fa-trash"
          style="cursor: pointer"
          @click="removeAllCartItems()"
        ></i>
      </span>
    </h3>
    <div v-if="cartItems.length == 0">
      <div class="alert bg-vue mt-4">
        <h6 class="alert-heading"></h6>
        Der Warenkorb ist Leer <i class="far fa-sad-tear"></i>
      </div>
    </div>
    <div v-if="cartItems.length > 0">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>
              <div class="p-2 px-3 text-uppercase">Produkt</div>
            </th>
            <th>
              <div class="py-2 text-uppercase">Preis</div>
            </th>
            <th>
              <div class="py-2 text-uppercase">Anzahl</div>
            </th>
            <th>
              <div class="py-2 px-3"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <CartListItem
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            :cartItem="cartItem"
          />
        </tbody>
      </table>

      <hr />

      <div
        class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold"
      >
        Bestellübersicht
      </div>
      <div class="p-4">
        <ul class="list-unstyled mb-4">
          <li class="d-flex justify-content-between pb-3">
            <strong class="text-muted">Zwischensumme </strong
            ><strong>{{ cartTotalWithoutTaxes }} €</strong>
          </li>
          <li class="d-flex justify-content-between py-3">
            <strong class="text-muted">MwSt.</strong
            ><strong>{{ cartTaxes }} €</strong>
          </li>
          <li class="d-flex justify-content-between py-3">
            <strong class="text-muted">Versandkosten</strong
            ><strong>{{ cartShipping }}€</strong>
          </li>
          <li class="d-flex justify-content-between py-3">
            <strong class="text-muted">Gesamtkosten</strong>
            <h5 class="font-weight-bold">{{ cartTotalWithShipping }} €</h5>
          </li>
        </ul>
        <button class="btn bg-vue rounded-pill py-2 btn-block">
          Zur Kasse
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return parseInt(this.$store.getters.cartTotel);
    },
    cartTotalWithoutTaxes() {
      return parseInt(this.cartTotal - this.cartTaxes);
    },
    cartTaxes() {
      return parseInt(this.cartTotal * 0.19);
    },
    cartShipping() {
      return 9.99;
    },
    cartTotalWithShipping() {
      return parseFloat(this.cartTotal) + parseFloat(this.cartShipping);
    },
    cartQuantity() {
      return this.$store.getters.cartQuantity;
    },
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    removeAllCartItems() {
      this.$store.dispatch("removeAllCartItems");
    },
  },
};
</script>

<style scoped>
</style>