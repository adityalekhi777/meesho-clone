import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Headerlayout from './components/Headerlayout';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import List from './pages/List.jsx'
import Category from './pages/Category.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Headerlayout/>}>
      <Route index element={<List/>}/>
      <Route path='/category/:name' element={<Category/>}/> 
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>

  )
)

function App() {
return (<RouterProvider router={router}/>)

  
}

export default App;
