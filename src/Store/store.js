import { configureStore } from '@reduxjs/toolkit'
import cartStore from './cartStore'
import userStore from './userStore'

export const store = configureStore({
    reducer: {
        cart: cartStore,
        user: userStore,
    },
})
