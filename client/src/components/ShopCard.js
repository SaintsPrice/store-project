import { REACT_APP_API_URL } from "../http"
import ratingStar from "../asset/white-star.svg"
import { NavLink } from "react-router-dom"

function ShopCard(props) {
  return (
    <div className="shop__card">
      <NavLink className="shop__card__image" to={`/device/${props.id}`}><img className="shop__card__image" src={REACT_APP_API_URL + props.image} /></NavLink>
      <div className="shop__card__description">
        <h3 className="shop__card__title">{props.name}</h3>
        <div className="shop__card__rating__container">
          <p className="shop__card__price">{props.price + ' руб.'}</p>
          <span className="shop__card__rating">{props.rating}</span>
          <img className="shop__card__rating__image" src={ratingStar} />
        </div>
      </div>
    </div>
  )
}

export default ShopCard