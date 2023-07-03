import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useStores } from "../contexts/rootStoreContext"
import { REACT_APP_API_URL } from "../http"

function DevicePage() {

  const {id} = useParams()

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  console.log(rating)
  console.log(hoverRating)

  const {device} = useStores()

  useEffect(() => {
    device.getOneDevice(id)
    device.getDeviceInfo(id)
  }, [])

  console.log(device.deviceInfo)

  return (
    <div>
      <div className="device">
        <img className="device__image" src={REACT_APP_API_URL + device.oneDevice.img} />
        <div className="device__description">
          <h2 className="device__title">{device.oneDevice.name}</h2>
          <div className="device__rating">
            <div className="device__rating__star" onMouseEnter={() => setHoverRating(1)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(1)}>
              {rating > 0 || hoverRating > 0 ? '★' : '☆'}</div>
            <div className="device__rating__star" onMouseEnter={() => setHoverRating(2)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(2)}>
              {rating > 1 || hoverRating > 1 ? '★' : '☆'}</div>
            <div className="device__rating__star" onMouseEnter={() => setHoverRating(3)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(3)}>
              {rating > 2 || hoverRating > 2 ? '★' : '☆'}</div>
            <div className="device__rating__star" onMouseEnter={() => setHoverRating(4)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(4)}>
              {rating > 3 || hoverRating > 3 ? '★' : '☆'}</div>
            <div className="device__rating__star" onMouseEnter={() => setHoverRating(5)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(5)}>
              {rating > 4 || hoverRating > 4 ? '★' : '☆'}</div>
            <p className="device__rating__value">{device.oneDevice.rating}</p>
          </div>
        </div>
        <div className="device__caption">
          <p className="device__price">{device.oneDevice.price + ' руб.'}</p>
          <button className="device__basket">Добавить в корзину</button>
        </div>
      </div>
      <div className="device__info">
          <h3 className="device__info__heading">Характеристики</h3>
          {device.deviceInfo.map((i) => {
            return (
              <div className="device__info__element" key={i.id}>
              <h3 className="device__info__title">{i.title}</h3>
              <p className="device__info__description">{i.description}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default observer(DevicePage)