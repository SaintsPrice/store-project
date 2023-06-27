import { NavLink } from "react-router-dom"
import basket from '../asset/Basket.svg'

function TypeBar(props) {

  function handlePopup() {
    props.setIsOpen(true)
  }

  return (
    <header className="header">
      <h1 className="header__title">E-Store</h1>
      <nav className="header__menu">
        <ul className="header__menu">
          <li className={`header__menu-item ${props.nameType === 'phone' ? 'header__menu-item_active' : ''}`}><NavLink to='/type/phone' className="header__menu-item">Смартфоны</NavLink></li>
          <li className={`header__menu-item ${props.nameType === 'tv' ? 'header__menu-item_active' : ''}`}><NavLink to='/type/tv' className="header__menu-item">Телевизоры</NavLink></li>
          <li className={`header__menu-item ${props.nameType === 'refrigerator' ? 'header__menu-item_active' : ''}`}><NavLink to='/type/refrigerator' className="header__menu-item">Холодильники</NavLink></li>
          <li className={`header__menu-item ${props.nameType === 'notebook' ? 'header__menu-item_active' : ''}`}><NavLink to='/type/notebook' className="header__menu-item">Ноутбуки</NavLink></li>
        </ul>
      </nav>
      <div className="header__basket-menu">
        <button className="header__login" onClick={handlePopup}>Войти</button>
        <NavLink to="/basket"><img src={basket} className="header__basket" /></NavLink>
      </div>
    </header>
  )
}

export default TypeBar