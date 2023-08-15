import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IApp, IProduct } from "../interfaces/application.interface"
import {
  addToFavorite,
  getAllFavorites,
  getAllProducts,
  removeFromFavorite,
} from "./appApi"

const initialState: IApp = {
  productos: [],
  favorites: [],
  loading: true,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Products
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      getAllProducts.fulfilled,
      (state, acion: PayloadAction<IProduct[] | never[]>) => {
        state.productos = acion.payload
        state.loading = false
      },
    )
    // Favorites
    builder.addCase(getAllFavorites.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      getAllFavorites.fulfilled,
      (state, action: PayloadAction<IProduct[] | never[]>) => {
        state.favorites = action.payload
        state.loading = false
      },
    )
    builder.addCase(addToFavorite.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      addToFavorite.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.favorites = [...state.favorites, action.payload]
        state.loading = false
      },
    )
    builder.addCase(removeFromFavorite.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.meta.arg,
      )
    })
  },
})

export const {} = appSlice.actions

export default appSlice.reducer
