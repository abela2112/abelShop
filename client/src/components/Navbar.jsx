import React from 'react'
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Container = styled.div`
height: 60px;  
/* ${mobile({height:'50px'})}   */
`
const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:'10px 0px'})}
`
const Left= styled.div`
display: flex;
align-items: center;
flex: 1;
`

const Right= styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:'center'})}
`
const Center= styled.div`
text-align: center;
flex: 1;

`
const Language= styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({display:'none'})}
`
const SearchContainer= styled.div`
border: 0.5px solid lightgrey;
padding: 5px;
margin-left: 25px;
display: flex;
align-items: center;
    
`
const Logo=styled.h1`
    font-weight:bold;
    font-size: 1.5rem;
    ${mobile({fontSize:'24px'})}
`
const Input= styled.input`
    border: none;
    ${mobile({width:'50px'})}
`

const MenuItem=styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:'12px', marginLeft:'10px'})}
`
const Navbar = () => {
    const {quantity}=useSelector(state=>state.cart)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search...'/>
                        <Search style={{color:'gray',fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                    <Link to='/carts'>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge></Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar