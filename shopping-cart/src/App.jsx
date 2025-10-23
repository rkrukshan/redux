
import './App.css'
import DashBoard from './components/DashBoard'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<DashBoard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div>
      <Product />
    </div>

  )
}

export default App
