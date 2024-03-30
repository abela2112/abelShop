import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    height: 30px;
    display:flex;
    font-size: 14px;
    font-weight: 500;
    background-color: teal;
    align-items: center;
    justify-content: center;
    color: #fff;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shiipping on Orders Over $50</Container>
  )
}

export default Announcement