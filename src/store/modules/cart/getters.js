export const getters = {
    cartItems: state => state.cartItems,
    cartTotel: state => {
      return state.cartItems.reduce((acc, cartItem) =>{
        return (cartItem.quantity * cartItem.price) + acc;
      },0);
    },
    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) =>{
        return cartItem.quantity  + acc;
      },0);
    },
  };