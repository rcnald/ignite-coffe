import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Success } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/order/:id" element={<Success />} />
      </Route>
    </Routes>
  )
}
