export interface IProduct {
  id: number
  name: string
  price: number
  img: string
}

export interface IApp {
  productos: never[] | IProduct[]
  favorites: never[] | IProduct[]
  loading: boolean
}
