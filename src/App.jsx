import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemProduct from './pages/ItemProduct'

function App() {  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/productos/:id' element={<ItemProduct />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
