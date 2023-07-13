import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useStores } from "../contexts/rootStoreContext"

function RegisterPopup(props) {

  const {user} = useStores()

  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleFamily(e) {
    setFamily(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleRepeatPassword(e) {
    setRepeatPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(password === repeatPassword) {
      user.registration(email, password, name, family)
      props.setOpenRegister(false)
    }
  }

  function handleLogin() {
    props.setOpenLogin(true)
    props.setOpenRegister(false)
  }

  return (
    <div className={`authPopup ${props.isOpen && "authPopup_opened"}`}>
      <div className="authPopup__container">
        <button className="authPopup_close" type="button" onClick={props.closePopup}></button>
        <div className="auth__bar">
          <button className="auth__bar__button" type="button" onClick={handleLogin}>Вход</button>
          <button className="auth__bar__button" type="button">Регистрация</button>
        </div>
        <form className="authPopup__form" onSubmit={handleSubmit}>
          <input className="authPopup__input" onChange={handleName} value={name} placeholder="Имя"></input>
          <input className="authPopup__input" onChange={handleFamily} value={family} placeholder="Фамилия"></input>
          <input className="authPopup__input" onChange={handleEmail} value={email} type="email" placeholder="Email"></input>
          <input className="authPopup__input" onChange={handlePassword} value={password} type="password" placeholder="Пароль"></input>
          <input className="authPopup__input" onChange={handleRepeatPassword} value={repeatPassword} type="password" placeholder="Повторите пароль"></input>
          <button  className="authPopup__submit" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  )
}

export default observer(RegisterPopup)