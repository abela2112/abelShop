import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CatagoryItem from './CatagoryItem'
import { mobile } from '../responsive'
const Container=styled.div`
display: flex;
margin-top: 10px;
padding: 20px;
${mobile({padding:'0px',flexDirection:'column'})}
`

const Catagories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CatagoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catagories