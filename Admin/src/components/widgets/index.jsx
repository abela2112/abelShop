import React from 'react'
import styled from 'styled-components'
import SmallWidget from './smallWidget'
import Largewidget from './largewidget'
const Container=styled.div`
    display: flex;
    padding: 10px;
`
const Widgets = () => {
  return (
    <Container>
        <SmallWidget/>
        <Largewidget/>
    </Container>
  )
}

export default Widgets