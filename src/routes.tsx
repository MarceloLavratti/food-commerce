import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Burgers from './pages/Main/Burgers/burgers'
import Pizzas from './pages/Main/Pizzas/pizzas'
import { Drinks } from './pages/Main/Drinks/drinks'
import { IceCreams } from './pages/Main/IceCreams/iceCreams'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}
