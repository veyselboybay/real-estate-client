import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import HomeLayout from './components/Layouts/HomeLayout'
import SearchPage from './components/SearchPage'
import OneListPage from './components/OneListPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='search/:listingId' element={<OneListPage />} />
      </Route>
    </Routes>
  )
}

export default App
