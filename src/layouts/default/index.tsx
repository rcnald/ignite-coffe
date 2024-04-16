import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

export function DefaultLayout() {
  return (
    <div className="mx-4 w-full max-w-[1120px]">
      <Header />
      <Outlet />
    </div>
  )
}
