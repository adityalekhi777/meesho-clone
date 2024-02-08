import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import List from './pages/List.jsx';
import Category from './pages/Category.jsx';
import PrivateCartRoute from './pages/PrivateCartRoute';
import Product from './pages/Product';

import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<List />} />
          <Route path='category/:name' element={<Category />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='cart' element={<PrivateCartRoute />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  );
}

export default App;
