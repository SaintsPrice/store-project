import { observer } from 'mobx-react-lite'
import headerImage from '../asset/HeaderImage.png'
import { useStores } from '../contexts/rootStoreContext'

function Shop() {

  const {user, device} = useStores()

  return (
    <div>
      {user.isAuth && <h3 className='header__greeting'>Добро пожаловать {user.user.name}!</h3>}
      <img src={headerImage} className="header__image" />
      <div className="shop__panel">
        <ul className="shop__panel">
          <li className="shop__panel__element">Новинки</li>
          <li className="shop__panel__element">Бестселлеры</li>
          <li className="shop__panel__element">Лучшие скидки</li>
        </ul>
      </div>
    </div>
  )
}

export default observer(Shop)