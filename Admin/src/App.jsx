
import styled from 'styled-components'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UsersList from './pages/UsersList'
import User from './pages/user'
import NewUser from './pages/NewUser'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import NewProduct from './pages/newProduct'
const Container=styled.div`
display: flex;
height: 100vh;

`
const OtherComp=styled.div`
  flex: 4;
  
`
function App() {
 

  return (
   <main>
    <Navbar/>
    <Container>
      <SideBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<UsersList/>}/>
        <Route path='/users/:userId' element={<User/>}/>
        <Route path='/new-user' element={<NewUser/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/new-product' element={<NewProduct/>}/>
      </Routes>
      
    </Container>
    </main>
  )
}

export default App
