import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DefaultLayout from './Layout/DefaultLayout';
import AdminLayout from './Layout/AdminLayout';
import { useEffect } from 'react';
import utils from './Utils/utils';
import { useDispatch } from 'react-redux';
import { actionLogin } from './Store/userStore';
import { publicRoutes, privateRoutes } from './Routes/index';
import Templates from "./Templates";



function App() {
  const dispatch = useDispatch();
  utils.scrollTop();
  useEffect(() => {
    const user = utils.getLocalData('user');
    if (user) {
      dispatch(actionLogin(user));
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const pathname = route.path;
              return <Route path={pathname} element={<Page />} key={index} />
            })}
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              const pathname = route.path;
              return <Route path={pathname} element={<Page />} key={index} />
            })}
          </Route>
          <Route path="*" element={<Templates.NotFoundTemplate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
