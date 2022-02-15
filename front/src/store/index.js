import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    productItems: [],
    cartItems: [],
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
      commit("DELETE_CART_ITEMS", {});
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
      return state.cartItems
        .reduce((acc, cartItem) => {
          return cartItem.quantity + acc;
        }, 0);
    },
  },
});
