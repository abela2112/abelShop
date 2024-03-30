import { Visibility } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
   flex:1;
   margin-right: 20px;
   box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;
padding: 20px;

`
const Title = styled.span`
font-size: 22px;
font-weight: 600; 
`
const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
`
const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
`
const Img = styled.img`
width:40px;
height:40px;
border-radius: 50%;
object-fit: cover;

`
const User = styled.div`
display: flex;
flex-direction: column;
`
const UserName = styled.span`
font-weight: 600;`
const UserJob = styled.span`
font-weight:300;`
const DisplayButton = styled.button`
display: flex;
align-items: center;
border:none;
background-color:#eeeef7;
padding: 7px 10px;
border-radius: 10px;
color: #555;
cursor: pointer;
`
const SmallWidget = () => {
    return (
        <Container>
            <Title>New Join Member</Title>
            <List>
                <ListItem>
                    <Img src='https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=1941&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <User>
                        <UserName>Anna </UserName>
                        <UserJob>Software developer</UserJob>
                    </User>
                    <DisplayButton>
                        <Visibility className='visiblity-icon' />
                        Dispaly
                    </DisplayButton>
                </ListItem>
                <ListItem>
                    <Img src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <User>
                        <UserName>Anna </UserName>
                        <UserJob>Software developer</UserJob>
                    </User>
                    <DisplayButton>
                        <Visibility className='visiblity-icon' />
                        Dispaly
                    </DisplayButton>

                </ListItem>
                <ListItem>
                    <Img src='https://images.unsplash.com/photo-1533636721434-0e2d61030955?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <User>
                        <UserName>Anna </UserName>
                        <UserJob>Software developer</UserJob>
                    </User>
                    <DisplayButton>
                        <Visibility className='visiblity-icon' />
                        Dispaly
                    </DisplayButton>
                </ListItem>
                <ListItem>
                    <Img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <User>
                        <UserName>Anna </UserName>
                        <UserJob>Software developer</UserJob>
                    </User>
                    <DisplayButton>
                        <Visibility className='visiblity-icon' />
                        Dispaly
                    </DisplayButton>
                </ListItem>
                <ListItem>
                    <Img src='https://images.unsplash.com/photo-1525357816819-392d2380d821?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <User>
                        <UserName>Anna </UserName>
                        <UserJob>Software developer</UserJob>
                    </User>
                    <DisplayButton>
                        <Visibility className='visiblity-icon' />
                        Dispaly
                    </DisplayButton>
                </ListItem>

            </List>

        </Container>
    )
}

export default SmallWidget