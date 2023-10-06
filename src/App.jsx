import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemProduct from './pages/ItemProduct'
import Home2 from './pages/Home2'

function App() {  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home2 />} />
    <Route path='/productos/:id' element={<ItemProduct />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
