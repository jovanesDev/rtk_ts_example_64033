import React from "react"
import CustomCard from "../shared/CustomCard"
import CustomContainer from "../shared/CustomContainer"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { isInFavorites } from "../helper/favoritos.helper"
import { removeFromFavorite } from "../features/aplication/appApi"

const FavoritesListContainer = () => {
  const { favorites } = useAppSelector((store) => store.app)
  const dispatch = useAppDispatch()
  return (
    <CustomContainer className="container w-50 d-flex flex-column justify-content-center align-items-center ">
      {favorites.length > 0 ? (
        favorites.map((product, index) => (
          <CustomCard
            cardType="favorite"
            key={product.id}
            favorite={isInFavorites(product.id, favorites)}
            //addToFavorite={() => console.log("addToFavorite")}
            removeFromFavorites={() => dispatch(removeFromFavorite(product.id))}
            {...product}
          />
        ))
      ) : (
        <h1 className="text-center my-5">No hay favoritos</h1>
      )}
    </CustomContainer>
  )
}

export default FavoritesListContainer
