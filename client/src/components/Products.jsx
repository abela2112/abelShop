import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import axios from 'axios'
const Container=styled.div`
display: flex;
padding:20px;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = ({catagory,filter,sort}) => {
  const [products,setProducts]=useState([])
  const [filterdProduct,setFiltedProduct] = useState([])
useEffect(()=>{
  axios.get(catagory ?`/api/product?catagories=${catagory}`:`/api/product`)
  .then(({data})=>{
    setProducts(data)
  }).catch((err)=>{console.error(err)})
},[catagory])
console.log(filter);
useEffect(()=>{
  
  products && filter && setFiltedProduct(
    products.filter((item)=>Object.entries(filter).some(([key,value])=>
    item[key]?.includes(value)
    )
  ))
},[products,catagory,filter])
console.log(filterdProduct)

useEffect(()=>{
if(sort==='newest'){
  
  setFiltedProduct((prev)=>
  [...prev].sort((a,b)=>a.createdAt-b.createdAt))}

  else if(sort==='asc'){
    setFiltedProduct((prev)=>
  [...prev].sort((a,b)=>a.price-b.price))
  }
  else{
    setFiltedProduct((prev)=>
  [...prev].sort((a,b)=>b.price-a.price))
  }

},[sort])
  return (
    <Container>
     {  filter && filterdProduct.length > 0 ?    
        filterdProduct?.map((product)=>(
            <Product product={product} key={product._id}/>
        )): products.slice(0,8).map((product)=>( <Product product={product} key={product._id}/>))
        
        }</Container>
  )
}

export default Products