import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useStores } from "../contexts/rootStoreContext"
import { REACT_APP_API_URL } from "../http"

function DevicePage() {

  const {id} = useParams()

  const {device} = useStores()

  useEffect(() => {
    device.getOneDevice(id)
  }, [])

  return (
    <div>
      <div className="device">
        <img className="device__image" src={REACT_APP_API_URL + device.oneDevice.img} />
        <div className="device__description">
          <h2 className="device__title">{device.oneDevice.name}</h2>
          <div className="device__rating">{device.oneDevice.rating}</div>
        </div>
        <div className="device__caption">
          <p className="device__price"></p>
          <button className="device__basket"></button>
        </div>
      </div>
      <div className="device__info">
          <h3>Характеристики</h3>
        </div>
    </div>
  )
}

export default observer(DevicePage)