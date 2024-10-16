import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Component/nav'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Product from './Component/Product'


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route Path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product' element={<Product/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
