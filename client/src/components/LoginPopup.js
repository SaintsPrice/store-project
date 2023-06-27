function LoginPopup(props) {

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
        <form className="authPopup__form">
          <input className="authPopup__input" type="email" placeholder="Email"></input>
          <input className="authPopup__input" type="password" placeholder="Password"></input>
          <button  className="authPopup__submit" type="submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPopup