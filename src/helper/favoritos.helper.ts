import { IProduct } from "../features/interfaces/application.interface"

export function isInFavorites(id: number | string, arr: IProduct[] | never[]) {
  return arr.some((item: IProduct) => item.id === id)
}
