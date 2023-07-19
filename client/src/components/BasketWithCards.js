import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useStores } from "../contexts/rootStoreContext"
import { REACT_APP_API_URL } from "../http"

function BasketWithCards() {

  const {device} = useStores()

  const [priceDevices, setPriceDevices] = useState('')

  useEffect(() => {
    if(device.basketDevices.length > 0) {
      setPriceDevices(device.basketDevices.reduce((acc, i) => {
        return acc + i.price
      }, 0))
    }
  }, [device.basketDevices.length])

  return (
    <div className="basket">
      {device.basketDevices.map((oneDevice, index) => {
        return (
          <div key={oneDevice.id} className="basket__device">
            <button onClick={() => device.deleteBasketDevice(index)}>Удалить</button>
            <img className="basket__device__image" src={REACT_APP_API_URL + oneDevice.img}/>
            <h3 className="basket__device__title">{oneDevice.name}</h3>
            <p className="basket__device__price">{oneDevice.price} руб.</p>
          </div>
        )
      })}
      <div className="basket__panel">
        <h3 className="basket__panel__title">Условия заказа</h3>
        <div className="basket__panel__info">
          <p className="basket__panel__number">Итого товаров: {device.basketDevices.length} {device.basketDevices.length > 1 ? device.basketDevices.length > 4 
          ? 'товаров' : 'товара' : 'товар'} </p>
          <span className="basket__panel__price">Итого сумма: {priceDevices} руб.</span>
        </div>
        <button className="basket__panel__button">Перейти к оформлению</button>
      </div>
    </div>
  )
}

export default observer(BasketWithCards)