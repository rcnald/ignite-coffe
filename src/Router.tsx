import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
