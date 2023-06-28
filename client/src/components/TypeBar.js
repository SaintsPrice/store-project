import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import basket from '../asset/Basket.svg'
import { useStores } from "../contexts/rootStoreContext"

function TypeBar(props) {

  const {device} = useStores()

  useEffect(() => {
    device.getTypes()
  }, [])

  console.log(device.selectedType)

  function handlePopup() {
    props.setIsOpen(true)
  }

  return (
    <header className="header">
      <h1 className="header__title"><NavLink style={{textDecoration: 'none', color: '#2A2A2A'}} to='/'>E-Store</NavLink></h1>
      <nav className="header__menu">
        <ul className="header__menu">
          {device.types.map((type) => {
            return (
              <li key={type.id} className={`header__menu-item ${type.id === device.selectedType && 'header__menu-item_active'}`} >
                <NavLink to={`/type/${type.name}`} className="header__menu-item" onClick={() => device.setSelectedType(type.id)}>{type.name}</NavLink></li>
            )
          })}
        </ul>
      </nav>
      <div className="header__basket-menu">
        <button className="header__login" onClick={handlePopup}>Войти</button>
        <NavLink to="/basket"><img src={basket} className="header__basket" /></NavLink>
      </div>
    </header>
  )
}

export default observer(TypeBar)