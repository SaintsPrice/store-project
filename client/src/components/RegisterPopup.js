function RegisterPopup(props) {

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
        <form className="authPopup__form">
          <input className="authPopup__input" placeholder="Имя"></input>
          <input className="authPopup__input" placeholder="Фамилия"></input>
          <input className="authPopup__input" type="email" placeholder="Email"></input>
          <input className="authPopup__input" type="password" placeholder="Пароль"></input>
          <input className="authPopup__input" type="password" placeholder="Повторите пароль"></input>
          <button  className="authPopup__submit" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPopup