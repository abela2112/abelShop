import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import axios from 'axios'
const key='pk_test_51O55ZECtxK40cakWTxT9MiAe3qnGrYbdq8F4XecRQuak7NpGJ3t8s0qAilSWjkazR3LPnjQlRZdbzHHXbLyS4rx300uUsUZDrD'
const Container = styled.div`
`

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: '1px' })}
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
background-color: ${({ type }) => type === 'filled' ? 'black' : 'transparent'};
border: ${({ type }) => type === 'filled' && 'none'} ;
color: ${({ type }) => type === 'filled' && 'white'};
`
const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`
const TopText = styled.span`
text-decoration: underline;
margin:0 10px;
cursor: pointer;
    
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
flex: 3;
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const ProductDetails = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: 20px;
`
const ProductName = styled.span`
`
const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({ color }) => color};
`
const ProductId = styled.span`
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: 'column' })}

`
const ProductSize = styled.span``
const PriceDetails = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`


const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: '5px 15px' })}

`
const ProductPrice = styled.div`
font-size:30px;
font-weight: 300;
${mobile({ marginBottom: '20px' })}
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;


`
const SummaryTitle = styled.h1`
font-weight:200;`
const SummaryItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 30px 0px;
font-size: ${({ type }) => type === 'total' && '24px'};
font-weight: ${({ type }) => type === 'total' && '500'};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color:black ;
color: #fff;
font-weight: 500;
`
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom'
const Carts = () => {

    const navigate=useNavigate()
    const { products, total } = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        if (stripeToken) {
            axios.post('/api/checkout/payment', {
                tokenId: stripeToken?.id,
                amount: total*100
            }).then(({ data }) => {
                console.log(data);
                navigate('/success')
            }).catch(err => console.log(err));
        }
    }, [stripeToken])

    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>

                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {products.length > 0 && products.map((product) => (
                            <>
                                <Product>
                                    <ProductDetails>
                                        <Image src={product.image} />
                                        <Details>
                                            <ProductName>
                                                <b>Product:</b> {product.title}
                                            </ProductName>
                                            <ProductId>
                                                <b>ID:</b> {product._id}
                                            </ProductId>
                                            <ProductColor color={product.color} />
                                            <ProductSize>
                                                <b>Size:</b> {product.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetails>
                                    <PriceDetails>
                                        <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>{product.quantity * product.price}</ProductPrice>
                                    </PriceDetails>
                                </Product><Hr /></>
                        ))
                        }


                      
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name='bela shop'
                            billingAddress
                            description='your payment is $20'
                            stripeKey={key}
                            shippingAddress
                            amount={total*100}
                            token={onToken}
                        >
                            <Button >CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Carts