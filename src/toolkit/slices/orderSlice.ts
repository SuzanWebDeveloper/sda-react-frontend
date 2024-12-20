import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import api from "@/api"
import { OrderState } from "@/types"
import { getToken } from "@/utils/localStorage"


const initialState: OrderState = {
  orders: [],
  totalPages: 1,
  error: null,
  isLoading: false
}

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await api.get("/orders")
  return response.data
})

//----------
export const fetchUserOrders = createAsyncThunk("orders/fetchUserOrders", async () => {
  const response = await api.get("/orders/userOrders",{
   headers: {
        Authorization: `Bearer ${getToken()}`
      }  
  })
  return response.data
})
//-----------

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      console.log(action.payload.data)
      state.orders = action.payload.data.items.$values
      state.isLoading = false
    })

//---------
 builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
   console.log(action.payload)
  //  state.orders = action.payload.data.items.$values //??
   state.isLoading = false
 })
//-----------

    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.error = null
        state.isLoading = true
      }
    )

    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state) => {
        state.error = "An error occurred"
        state.isLoading = false
      }
    )
  }
})


export default orderSlice.reducer
