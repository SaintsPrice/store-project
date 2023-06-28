import { REACT_APP_API_URL } from "../http"
import ratingStar from "../asset/white-star.svg"
import { NavLink } from "react-router-dom"

function Card(props) {
  return (
    <div className="card">
      <NavLink className="card__image" to={`/device/${props.id}`}><img className="card__image" src={REACT_APP_API_URL + props.image} /></NavLink>
      <div className="card__description">
        <h3 className="card__title">{props.name}</h3>
        <div className="card__rating__container">
          <span className="card__rating">{props.rating}</span>
          <img className="card__rating__image" src={ratingStar} />
        </div>
      </div>
      <p className="card__price">{props.price + ' руб.'}</p>
    </div>
  )
}

export default Card