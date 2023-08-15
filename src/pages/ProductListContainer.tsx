import React from "react"
import CustomContainer from "../shared/CustomContainer"
import CustomCard from "../shared/CustomCard"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { isInFavorites } from "../helper/favoritos.helper"
import { IProduct } from "../features/interfaces/application.interface"
import { addToFavorite } from "../features/aplication/appApi"

const ProductListContainer = () => {
  const { productos, favorites } = useAppSelector((store) => store.app)
  const dispatch = useAppDispatch()

  return (
    <CustomContainer className="d-flex flex-wrap p-5 justify-content-evenly">
      {productos.length > 0 ? (
        productos.map((product, index) => (
          <CustomCard
            cardType="products"
            key={product.id}
            favorite={isInFavorites(product.id, favorites)}
            addToFavorite={() => dispatch(addToFavorite(product))}
            //removeFromFavorites={() => console.log("removeFromFavorites")}
            {...product}
          />
        ))
      ) : (
        <h1 className="text-center"> No hay nada</h1>
      )}
    </CustomContainer>
  )
}

export default ProductListContainer
