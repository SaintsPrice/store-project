import headerImage from '../asset/HeaderImage.png'

function Shop() {

  return (
    <div>
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

export default Shop