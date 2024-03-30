import React from 'react'
import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
const Container=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const FeatureItem=styled.div`
flex:1;
padding: 30px;
border-radius: 10px;
margin:0 10px;
box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;

    
`  
 const FeatureTitle=styled.span`
   font-size :20px ;
 `
  const FeatureItemMoneyContainer=styled.div`
  margin: 10px 0;
    display: flex;
    align-items: center;
`
const FeatureItemMoney=styled.span`
    font-size: 30px;
    font-weight: 600;
`
const FeatureItemMoneyRate=styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`
const FeaturedSubtitle=styled.span`
font-size:15px;
color: gray;

`

const FeaturedInfo = () => {
    return (
        <Container>
            
            <FeatureItem>
                <FeatureTitle>Revenue</FeatureTitle>
                <FeatureItemMoneyContainer>
                    <FeatureItemMoney>$2,415</FeatureItemMoney>
                    <FeatureItemMoneyRate>-11.4 <ArrowDownwardIcon className='featured-icon negative'/>
                    </FeatureItemMoneyRate>
                    
                </FeatureItemMoneyContainer>
                <FeaturedSubtitle>compare to last month</FeaturedSubtitle>
            </FeatureItem>
            <FeatureItem>
                <FeatureTitle>Sales</FeatureTitle>
                <FeatureItemMoneyContainer>
                    <FeatureItemMoney>$2,415</FeatureItemMoney>
                    <FeatureItemMoneyRate>-11.4 <ArrowDownwardIcon className='featured-icon negative'/></FeatureItemMoneyRate>
                    
                </FeatureItemMoneyContainer>
                <FeaturedSubtitle>compare to last month</FeaturedSubtitle>
            </FeatureItem>
            <FeatureItem>
                <FeatureTitle>Cost</FeatureTitle>
                <FeatureItemMoneyContainer>
                    <FeatureItemMoney>$2,415</FeatureItemMoney>
                    <FeatureItemMoneyRate>-11.4 <ArrowUpwardIcon className='featured-icon'/></FeatureItemMoneyRate>
                    
                </FeatureItemMoneyContainer>
                <FeaturedSubtitle>compare to last month</FeaturedSubtitle>
            </FeatureItem>
        </Container>
    )
}

export default FeaturedInfo