import { useState } from 'react'
import Home from './pages/home'
import ProductPage from './pages/productPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Carts from './pages/Carts'
import Product from './pages/product'
import Payment from './pages/payment'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import axios from 'axios'

function App() {
  axios.defaults.baseURL='https://shopbackend-l514.onrender.com'
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='/products' element={<ProductPage/>}/>
         <Route path='/products/:catagory' element={<ProductPage/>}/>
         <Route path='/product/:id' element={<Product/>}/>
         <Route path='/carts' element={<Carts/>}/>
         <Route path='/payment' element={<Payment/>}/>
    
    </Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   
  )
}

export default App
