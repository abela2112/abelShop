import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container=styled.div`
    display: flex;
    justify-content: space-between;
    
    ${mobile({flexDirection:'column'})}
`
const Left=styled.div`
flex:1;
padding: 20px;
`
const Center=styled.div`
flex:1;
padding: 20px;
${mobile({display:'none'})}
`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    display: flex;
    flex-wrap:wrap ;
    padding: 0;
    margin: 0;
    list-style: none;


`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
 
    
`
const Right=styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:'#fff8f8'})}

`
const SocialMediaContainer=styled.div`
    display: flex;

`
const SocialMediaIcon=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
color: #fff;
background-color:#${({bg})=>bg};
margin-right: 20px;


`
const Logo=styled.h1`

`
const Desc=styled.p`
margin:20px 0px; 

`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
   `
   const Payment=styled.img`
    width: 50%;
   `
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
               There are many variation of passages of Lorem Ipsun available, but 
               the majority have suffered alteration in some form, by injected 
               humur, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialMediaContainer>
                <SocialMediaIcon bg='3B5999'>
                    <Facebook/>
                </SocialMediaIcon>
                <SocialMediaIcon bg='E4405F'>
                    <Instagram/>
                </SocialMediaIcon>
                <SocialMediaIcon bg='55ACEE'>
                    <Twitter/>
                </SocialMediaIcon>
                <SocialMediaIcon bg='E60023'>
                    <Pinterest/>
                </SocialMediaIcon>
            </SocialMediaContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Home</ListItem>
            </List>


        </Center>
        <Right>
             <Title>Contact</Title>
             <ContactItem ><Room style={{marginRight:'10px'}}/> debre brihan</ContactItem>
             <ContactItem><Phone style={{marginRight:'10px'}}/> +251 933-01-7499</ContactItem>
             <ContactItem><MailOutline style={{marginRight:'10px'}}/> abela9326@gmail.com</ContactItem>
       <Payment/>

        </Right>
    </Container>
  )
}

export default Footer