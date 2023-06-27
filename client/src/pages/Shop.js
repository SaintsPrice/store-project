import TypeBar from '../components/TypeBar'
import headerImage from '../asset/HeaderImage.png'
import LoginPopup from '../components/LoginPopup'
import RegisterPopup from '../components/RegisterPopup'
import { useState } from 'react'
import Footer from '../components/Footer'

function Shop() {

  const [isOpenedLogin, setIsOpenedLogin] = useState(false)
  const [isOpenedRegister, setIsOpenedRegister] = useState(false)

  function closeAllPopup() {
    setIsOpenedLogin(false)
    setIsOpenedRegister(false)
  }

  return (
    <div>
      <TypeBar setIsOpen={setIsOpenedLogin} />
      <img src={headerImage} className="header__image" />
      <div className="shop__panel">
        <ul className="shop__panel">
          <li className="shop__panel__element">Новинки</li>
          <li className="shop__panel__element">Бестселлеры</li>
          <li className="shop__panel__element">Лучшие скидки</li>
        </ul>
      </div>
      <Footer />
      <LoginPopup isOpen={isOpenedLogin} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister} />
      <RegisterPopup isOpen={isOpenedRegister} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister}/>
    </div>
  )
}

export default Shop