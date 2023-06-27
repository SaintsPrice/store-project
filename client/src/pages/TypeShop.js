import { useState } from "react"
import { useParams } from "react-router-dom"
import LoginPopup from "../components/LoginPopup"
import RegisterPopup from "../components/RegisterPopup"
import TypeBar from "../components/TypeBar"

function TypeShop() {

  const {name} = useParams()

  const [isOpenedLogin, setIsOpenedLogin] = useState(false)
  const [isOpenedRegister, setIsOpenedRegister] = useState(false)

  function closeAllPopup() {
    setIsOpenedLogin(false)
    setIsOpenedRegister(false)
  }

  return (
    <>
      <TypeBar setIsOpen={setIsOpenedLogin} nameType={name}/>

      <LoginPopup isOpen={isOpenedLogin} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister} />
      <RegisterPopup isOpen={isOpenedRegister} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister}/>
    </>
  )
}

export default TypeShop