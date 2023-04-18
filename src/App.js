import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { app } from "./firebaseConfig";
import "./App.css";
import Headerlayout from "./components/Headerlayout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import List from "./pages/List.jsx";
import Category from "./pages/Category.jsx";
import PrivateCartRoute from "./pages/PrivateCartRoute";
import Product from "./pages/Product";

import { Provider } from "react-redux";
import store from "./redux/store";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Headerlayout />}>
      <Route index element={<List />} />
      <Route path="category/:name" element={<Category />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<PrivateCartRoute />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
