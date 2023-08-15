import { axiosClient } from "./axios.client"

export function getProducts() {
  return axiosClient.get("/productos")
}
