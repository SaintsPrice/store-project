import { observer } from "mobx-react-lite";
import { useState } from "react"
import { useStores } from "../contexts/rootStoreContext";

function LoginPopup(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useStores()

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    user.login(email, password)
    props.setOpenLogin(false)

  }

  function handleRegister() {
    props.setOpenLogin(false)
    props.setOpenRegister(true)
  }

  return (
    <div className={`authPopup ${props.isOpen && "authPopup_opened"}`}>
      <div className="authPopup__container">
        <button className="authPopup_close" type="button" onClick={props.closePopup}></button>
        <div className="auth__bar">
          <button className="auth__bar__button" type="button">Вход</button>
          <button className="auth__bar__button" type="button" onClick={handleRegister}>Регистрация</button>
        </div>
        <form className="authPopup__form" onSubmit={handleSubmit}>
          <input className="authPopup__input" onChange={handleEmail} value={email} type="email" placeholder="Email"></input>
          <input className="authPopup__input" onChange={handlePassword} value={password} type="password" placeholder="Password"></input>
          <button  className="authPopup__submit" type="submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default observer(LoginPopup)