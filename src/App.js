import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'
import Inbox from './pages/inbox'
import Calendar from './pages/calendar'
import History from './pages/history'
import Onboarding from './pages/onboarding'
import Perks from './pages/perks'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Inbox />} path='/inbox'></Route>
          <Route element={<Calendar />} path='/calendar'></Route>
          <Route element={<History />} path='/transactions'></Route>
          <Route element={<Onboarding />} path='/onboarding'></Route>
          <Route element={<Perks />} path='/perks'></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
