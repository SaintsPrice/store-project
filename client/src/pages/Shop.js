import { observer } from 'mobx-react-lite'
import headerImage1 from '../asset/68076731-d2fd-4d40-9c4b-7fbe7ec35d9e.jpg'
import headerImage2 from '../asset/c1250968-3a8b-45a3-bcd6-2be27781d145.jpg'
import headerImage3 from '../asset/e5cbafd7-e932-4439-a48f-690069f860af.jpg'
import { useStores } from '../contexts/rootStoreContext'
import Carousel from '../components/Carousel'
import { useEffect } from 'react'
import ShopCard from '../components/ShopCard'

function Shop() {

  const {user, device} = useStores()

  useEffect(() => {
    device.getDevices(undefined, undefined, undefined, 100)
  })

  return (
    <div>
      {user.isAuth && <h3 className='header__greeting'>Добро пожаловать {user.user.name}!</h3>}
      <Carousel>
        <img src={headerImage1} className="carousel__image" />
        <img src={headerImage2} className="carousel__image" />
        <img src={headerImage3} className="carousel__image" />
      </Carousel>
      <div className="shop__panel">
        <ul className="shop__panel__list">
          <li className="shop__panel__element">Новинки</li>
          <li className="shop__panel__element">Бестселлеры</li>
          <li className="shop__panel__element">Лучшие скидки</li>
        </ul>
        <div className="shop__cards">
        <Carousel>
        {
          device.devices.map((card) => {
            return (
              <ShopCard key={card.id} id={card.id} name={card.name} image={card.img} price={card.price} rating={card.rating} />
            )
          })
        }
        </Carousel>
        </div>
      </div>
    </div>
  )
}

export default observer(Shop)