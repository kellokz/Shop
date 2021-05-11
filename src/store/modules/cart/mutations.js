import * as types from './mutation-types';

export const mutations = {
    [types.UPDATE_CART_ITEMS](state,payload){
      state.cartItems = payload;
    }
  };