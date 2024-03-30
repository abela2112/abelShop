import React from 'react'
import styled from 'styled-components'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import Badge from '@mui/material/Badge'
const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff;
    position: relative;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    z-index: 3;
`
const Left = styled.div`


`
const Right = styled.div`
display: flex;
align-items: center;
gap: 10px;

`
const Logo = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: darkblue;
`
const ImgContainer=styled.div`
    width: 40px;
    height: 40px;

`
const Avatar=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Bela</Logo>
                </Left>
                <Right>
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon color="action"  />
                    </Badge>
                    <Badge badgeContent={'En'} color="primary">
                    <LanguageIcon color="action"  />
                    </Badge>
                    
                    <SettingsIcon />
 <ImgContainer>
 <Avatar src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
 </ImgContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar