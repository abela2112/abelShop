import styled from '@emotion/styled'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Product from './product'
import Products from '../components/Products'
import { mobile } from '../responsive'
import { useLocation, useParams } from 'react-router-dom'
const Container = styled.div`
    
`
const Title = styled.h1`
margin: 10px;


`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 20px; */
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin:'0 20px',display:'flex',flexDirection:'column'})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({margin:'0px'})} 
`
const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    ${mobile({margin:'10px 0px'})}

`
const Option = styled.option`

`
const ProductPage = () => {
    const {catagory}=useParams()
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState('newest')
    const handleFilters=(e)=>{
        setFilters({
            ...filters,[e.target.name]:e.target.value
        })
    }

    const handleSort=(e)=>{
        const value=e.target.value
        setSort(value)
    }
    console.log(filters)
   
    return (
        <Container>
            <Title>{catagory ? `${catagory}`:'Products'}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>filter products</FilterText>
                    <Select  name='color' onChange={handleFilters}>
                        <Option disabled selected>color</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                        <Option>pink</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled selected>size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>sort Products:</FilterText>
                    <Select name='sort' onChange={handleSort}>
                        <Option value={'newest'}>newest</Option>
                        <Option value={'asc'}>price(asc)</Option>
                        <Option value={'desc'}>price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filter={filters} catagory={catagory} sort={sort}/>
        </Container>
    )
}

export default ProductPage