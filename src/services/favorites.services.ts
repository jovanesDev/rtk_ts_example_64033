import { IProduct } from "../features/interfaces/application.interface"
import { axiosClient } from "./axios.client"

export function getFavorites() {
  return axiosClient.get("/favoritos")
}

export function postFavorites(favorite: IProduct) {
  return axiosClient.post("/favoritos", favorite)
}

export function deleteFavorites(id: number) {
  return axiosClient.delete(`/favoritos/${id}`)
}
