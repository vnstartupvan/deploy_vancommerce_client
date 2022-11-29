import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    cartState: false,
}
const cartLocal = localStorage.getItem('cartList') !== null ? {...JSON.parse(localStorage.getItem('cartList')), cartState: false} : initialState;
export const cartStore = createSlice({
    name: 'cart',
    initialState: cartLocal,
    reducers: {
        addItem: (state, action) => {

            let addedProduct = action.payload;
            const existedProduct = state.products.findIndex(product => product.title === addedProduct.title);
            if(state.products[existedProduct]?.qty >= 10 && existedProduct !== -1) {
                alert('Out of stock!!!');
                return;
            }
            if (existedProduct !== -1) {
                addedProduct.qty = state.products[existedProduct].qty + 1;
                let updatedProducts = state.products.filter(item => item.title !== addedProduct.title);
                state.products = [...updatedProducts, addedProduct];
            } else { 
                state.products.push(addedProduct);
            }
            localStorage.setItem('cartList', JSON.stringify(current(state)));
            state.cartState = true;
        },
        removeItem: (state, action) => {
            const removedProduct = action.payload;
            const updatedProducts = state.products.filter(i => i.title !== removedProduct);
            state.products = updatedProducts;
            localStorage.setItem('cartList', JSON.stringify(current(state)));
        },
        updateItem: (state, action) => {
            let { updatedItem, selectedQty } = action.payload;
            const foundItem = state.products.findIndex(i => i.title === updatedItem);
            state.products[foundItem].qty = selectedQty;
            localStorage.setItem('cartList', JSON.stringify(current(state)));
        },
        toggleCart: (state, action) => {
            let cartState = state.cartState;
            state.cartState = true;
            if (cartState) {
                state.cartState = false;
            };
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem, toggleCart } = cartStore.actions;

export default cartStore.reducer