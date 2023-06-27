function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">E-Store</h2>
        <p className="footer__copyright">© 2023 SaintsPrice</p>
      </div>
      <adress className="footer__links">
        <ul className="footer__links">
          <li className="footer__link"><a className="footer__link-git" href="#"></a><a href="#" style={{textDecoration: 0}}>GitHub</a></li>
          <li className="footer__link"><a className="footer__link-vk" href="#"></a><a href="#" style={{textDecoration: 0}}>Vkontakte</a></li>
          <li className="footer__link"><a className="footer__link-tg" href="#"></a><a href="#" style={{textDecoration: 0}}>Telegram</a></li>
        </ul>
      </adress>
    </footer>
  )
}

export default Footer