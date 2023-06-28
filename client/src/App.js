import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import RegisterPopup from './components/RegisterPopup';
import TypeBar from './components/TypeBar';

function App() {

  const [isOpenedLogin, setIsOpenedLogin] = useState(false)
  const [isOpenedRegister, setIsOpenedRegister] = useState(false)

  function closeAllPopup() {
    setIsOpenedLogin(false)
    setIsOpenedRegister(false)
  }

  return (
    <BrowserRouter>
    <TypeBar setIsOpen={setIsOpenedLogin}/>
      <AppRouter />
      <LoginPopup isOpen={isOpenedLogin} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister} />
      <RegisterPopup isOpen={isOpenedRegister} closePopup={closeAllPopup} setOpenLogin={setIsOpenedLogin} setOpenRegister={setIsOpenedRegister}/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
