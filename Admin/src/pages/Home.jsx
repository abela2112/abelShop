import React from 'react'
import styled from 'styled-components'
import FeaturedInfo from '../components/FeaturedInfo'
import Charts from '../components/Charts'
import { userdata } from '../data'
import Widgets from '../components/widgets'
const Container=styled.div`
    flex: 4;
    margin-top: 10px;
`
const Home = () => {
  return (
    <Container>
       <FeaturedInfo/>
       <Charts data={userdata} title={'User Analytics'} dataKey={'amt'} grid={true}/>
       <Widgets/>
    </Container>
  )
}

export default Home