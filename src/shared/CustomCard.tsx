import { AiOutlineHeart } from "react-icons/ai"
import { AiTwotoneHeart } from "react-icons/ai"

type Props = {
  id: string | number
  name: string
  price: number | string
  img: string
  favorite: boolean
  cardType: "products" | "favorite"
  addToFavorite?: () => void
  removeFromFavorites?: () => void
}

const CustomCard = (props: Props) => {
  return (
    <div
      className={`${
        props.cardType === "products" ? "" : "d-flex"
      } my-4 mx-2 border`}
    >
      <img
        width={"200px"}
        //height={"200px"}
        src={props.img}
        className=" mx-auto w-full"
        //className="card-img-top img-thumbnail"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Nombre : {props.name}</h5>
        <p className="card-text">Precio : {props.price}</p>
        {props.favorite && props.cardType === "products" && (
          <button className="btn" disabled>
            The item is in favorites
          </button>
        )}
        {props.favorite && props.cardType !== "products" && (
          <button
            onClick={props.removeFromFavorites}
            className="btn btn-danger"
          >
            <span className="mx-1">Remove Favorites</span>
            <AiTwotoneHeart />
          </button>
        )}
        {!props.favorite && props.cardType === "products" && (
          <button onClick={props.addToFavorite} className="btn btn-success">
            <span>Add to favoritos</span>
            <AiOutlineHeart />
          </button>
        )}
        {/*         
        <button
          className={`btn ${props.favorite ? "btn-warning" : "btn-success"}`}
        >
          {props.favorite && props.cardType !== "products" ? (
            <>
              <span>Remove Favorites</span>
              <AiTwotoneHeart />
            </>
          ) : (
            <>
              <span> Add to favoritos</span>
              <AiOutlineHeart />
            </>
          )}
        </button> */}
      </div>
    </div>
  )
}

export default CustomCard

// {
//     "id": 4,
//     "name": "Producto 4",
//     "price": 10.50,
//     "img": "https://example.com/image4.jpg"
//   },
