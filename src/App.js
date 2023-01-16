import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/'></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
