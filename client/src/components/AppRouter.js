import {Route, Routes, Navigate} from 'react-router-dom';
import { useStores } from '../contexts/rootStoreContext';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/const';

function AppRouter() {

const {user} = useStores()

  return (
    <>
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component />} exact/>
      )}

      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component />} exact/>
      )}
      <Route path='*' element={<Shop />} />
    </Routes>
    </>
  )
}

export default AppRouter