import { createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts } from "../../services/products.services"
import {
  deleteFavorites,
  getFavorites,
  postFavorites,
} from "../../services/favorites.services"
import { IProduct } from "../interfaces/application.interface"

export const getAllProducts = createAsyncThunk(
  "app/getAllProducts",
  async () => {
    const response = await getProducts()
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)
export const getAllFavorites = createAsyncThunk(
  "app/getAllFavorites",
  async () => {
    const response = await getFavorites()
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

export const addToFavorite = createAsyncThunk(
  "app/addToFavorite",
  async (product: IProduct) => {
    const response = await postFavorites(product)
    return response.data
  },
)
export const removeFromFavorite = createAsyncThunk(
  "app/removeFromFavorite",
  async (id: number) => {
    const response = await deleteFavorites(id)
    return response
  },
)
