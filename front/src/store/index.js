import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    productItems: [],
    cartItems: [],
    orders: [],
  },
  mutations: {
    UPDATE_PRODUCT_ITEMS(state, payload) {
      state.productItems = payload;
    },
    REMOVE_CART_ITEMS(state, productItem) {
      state.cartItems.map(cartProduct => {
        if (cartProduct.id === productItem.id && cartProduct.quantity > 1) {
          cartProduct.quantity--;
        } else if (
          cartProduct.id === productItem.id &&
          cartProduct.quantity === 1
        ) {
          const cartIndexToRemove = state.cartItems.findIndex(
            cartProduct => cartProduct.id === productItem.id
          );
          state.cartItems.splice(cartIndexToRemove, 1);
        }
      });
    },
    ADD_CART_ITEMS(state, newCartProduct) {
      let cartProductExists = false;
      state.cartItems.map(cartProduct => {
        cartProduct.quantity = cartProduct.quantity || 1;
        if (cartProduct.id === newCartProduct.id) {
          cartProduct.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) {
        newCartProduct.quantity = 1;
        state.cartItems.push(newCartProduct);
      }
    },
    DELETE_CART_ITEMS(state, newCart) {
      state.cartItems = newCart;
    },
    UPDATE_ORDERS(state, orders) {
      state.orders = orders;
    },
  },
  actions: {
    getProductItems({ commit }) {
      axios.get(`/api/items/all`).then(response => {
        commit("UPDATE_PRODUCT_ITEMS", response.data);
      });
    },
    addCartItem({ commit }, cartItem) {
      commit("ADD_CART_ITEMS", cartItem);
    },
    removeCartItem({ commit }, cartItem) {
      commit("REMOVE_CART_ITEMS", cartItem);
    },
    removeAllCartItems({ commit }) {
      commit("DELETE_CART_ITEMS", []);
    },
    addOrder({ commit, getters, dispatch }, paymentItem) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      let payload = {
        id: 0,
        date: dd + "/" + mm + "/" + yyyy,
        payment: paymentItem,
        items: this.state.cartItems,
        total: getters.cartTotal,
        quantity: getters.cartQuantity,
      };

      axios.post(`/api/orders`, payload).then(response => {
        dispatch('removeAllCartItems', commit);
        commit("UPDATE_ORDERS", response.data);
      });
    },
    getOrders({ commit }) {
      axios.get(`/api/orders/all`).then(response => {
        commit("UPDATE_ORDERS", response.data);
      });
    },
  },
  getters: {
    productItems: state => state.productItems,
    productItemById: state => id => {
      return state.productItems.find(productItem => productItem.id === id);
    },
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems
        .reduce((acc, cartItem) => {
          return cartItem.quantity * cartItem.price + acc;
        }, 0)
        .toFixed(2);
    },
    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    },
    orders: state => state.orders,
  },
});
