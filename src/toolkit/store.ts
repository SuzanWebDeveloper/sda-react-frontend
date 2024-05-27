import { configureStore } from "@reduxjs/toolkit"

import productReducer from "./slices/productSlice" //rename it as reducer
import userReducer from "./slices/userSlice"
import categoryReducer from "./slices/categorySlice"
import cartReducer from "./slices/cartSlice"
import orderReducer from "./slices/orderSlice"


export const store = configureStore({
  reducer: {
    productR: productReducer, //key any name
    userR: userReducer,
    categoryR: categoryReducer,
    cartR: cartReducer,
    orderR: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
