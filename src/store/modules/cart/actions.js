import axios from "axios";
import * as types from './mutation-types';

export const actions = {
    getCartItems({commit}){
      axios.get('/api/cart').then((response)=>{
        commit(types.UPDATE_CART_ITEMS,response.data);
      });
    },
    addCardItem({commit}, payload){
      axios.post('/api/cart',payload).then((response) => {
        commit(types.UPDATE_CART_ITEMS, response.data);
      });
    },
    removeCardItem({commit}, payload){
      axios.post('/api/cart/delete',payload).then((response) => {
        commit(types.UPDATE_CART_ITEMS, response.data);
      });
    },
    removeAllCartItems({commit}){
      axios.post('/api/cart/delete/all').then((response) => {
        commit(types.UPDATE_CART_ITEMS, response.data);
      });
    },
    removeAllOfOneCartItem({commit}, payload){ 
      axios.post('api/cart/product/delete',payload).then((response) => {
        commit(types.UPDATE_CART_ITEMS, response.data);
      });
    },
    
  };