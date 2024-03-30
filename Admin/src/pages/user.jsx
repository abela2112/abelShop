import { CalendarToday, LocationCityOutlined, LocationCityRounded, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, PhoneAndroidOutlined, Publish } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container=styled.div`
    flex: 4;
    margin-top: 20px;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Bottom=styled.div`
   display: flex;
   padding: 10px;
`
const EditTitle=styled.h3`
    
`
const CreateButton=styled.button`
border: none;
border-radius: 10px;
padding:5px 10px;
color: white;
background-color: #329032;
font-size: 16px;
   
`
const Img = styled.img`
width:40px;
height:40px;
border-radius: 50%;
object-fit: cover;

`
const UserInfoBox=styled.div`
   flex: 1;
   padding: 20px;
   box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;
`
const UserUpdate=styled.div`
padding: 20px;
    flex: 2;
    box-shadow: 0px 0px 11px -1px #d0c8c8;
    -webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
    -moz-box-shadow: 0px 0px 11px -1px #d0c8c8;
    margin-left: 20px;
`
const UserBox=styled.div`
    display: flex;
    flex-direction:column ;
    margin-left: 10px;
`
const UserName=styled.span`
    font-weight: 600;
`
const UserJobTitle=styled.span`
    font-weight: 300;
`
const UserAccount=styled.div`
display :flex ;
`
const UserDetailBox=styled.div`
margin-top: 20px;

`
const UserDetail=styled.div`
display: flex;
flex-direction: column;
`
const DetailsTitle=styled.span`
font-weight: 600;
font-size: 14px;
margin-left: 10px;
color: rgb(175, 170, 177);
`
const UpdateImg=styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-left: 20px;
`
const UserDetailContent=styled.span`
display:flex;
 align-items:center;
 margin: 10px 0;
 `
 const UserUpdateTitle=styled.span` `
 const UserUpdateForm=styled.form`
 display: flex;
 margin-top: 20px;
 justify-content: space-between;
 `
    
 const UserUPdateLeftBox=styled.div`
 
 `
 const UserUPdateRightBox=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;

 `
 const UserUpdateItem=styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 10px;
 `
 const UserUpdateUpload=styled.div`
    display: flex;
    align-items: center;

 `

 const Label=styled.label`
    font-size: 14px;
    margin-bottom: 5px;
 `
 const Input=styled.input`
 width: 250px;
 border: none;
 height:30px;
 border-bottom: 1px solid gray;
 `
 const UserUpdateUploadInputBox=styled.div`
 
    
 `
 const UpdateButton=styled.button`
    padding: 5px;
    font-weight: 600;
    color: #fff;
    background-color: darkblue;
    border-radius: 5px;
    font-size: 16px;
 `
const User = () => {
  return (
    <Container>
        <Top>
            <EditTitle>Edit User</EditTitle>
            <Link to={'/new-user'}><CreateButton>Create</CreateButton></Link>
        </Top>
        <Bottom>
            <UserInfoBox>
                <UserAccount>
                    <Img src='https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=1941&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <UserBox>
                     <UserName>Anna jhon</UserName>
                     <UserJobTitle>software developer</UserJobTitle>
                    </UserBox>
                    
                </UserAccount>
                <UserDetailBox>
                    <DetailsTitle>Account Detail</DetailsTitle>
                 <UserDetail>
                    <UserDetailContent><PermIdentity style={{marginRight:'5px'}}/>annabok93</UserDetailContent>
                    <UserDetailContent><CalendarToday style={{marginRight:'5px'}}/>10-5-2000</UserDetailContent>
                </UserDetail>
                <UserDetail>
                <DetailsTitle>Contact Detail</DetailsTitle>
                    <UserDetailContent><MailOutline style={{marginRight:'5px'}}/> anna123@gmail.com</UserDetailContent>
                    <UserDetailContent><PhoneAndroid style={{marginRight:'5px'}}/> +251-933-01745</UserDetailContent>
                    <UserDetailContent><LocationSearching style={{marginRight:'5px'}}/>  Addis Ababa</UserDetailContent>
                    
                </UserDetail>   
                </UserDetailBox>
            </UserInfoBox>
            <UserUpdate>
               <UserUpdateTitle>Edit</UserUpdateTitle>
               <UserUpdateForm>
               <UserUPdateLeftBox>
                   <UserUpdateItem>
                    <Label>Username</Label>
                    <Input type="text" name="username" placeholder='annacoda'/>
                   </UserUpdateItem>
                   <UserUpdateItem>
                    <Label>Full Name</Label>
                    <Input type="text" name="username" placeholder='anna Jhon'/>
                   </UserUpdateItem>
                   <UserUpdateItem>
                    <Label>Email</Label>
                    <Input type="text" name="username" placeholder='anna123@gmail.com'/>
                   </UserUpdateItem>
                   <UserUpdateItem>
                    <Label>Phone Number</Label>
                    <Input type="text" name="username" placeholder='+251 93301 7499'/>
                   </UserUpdateItem>
                   <UserUpdateItem>
                    <Label>Address</Label>
                    <Input type="text" name="username" placeholder='Addis Ababa'/>
                   </UserUpdateItem>
                </UserUPdateLeftBox>
                <UserUPdateRightBox>
                    <UserUpdateUpload>
                        <UpdateImg src='https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&q=80&w=1941&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <UserUpdateUploadInputBox>
                    <Label htmlFor='file'><Publish/></Label>
                    <Input type='file' id='file' style={{display:'none'}}/>
                </UserUpdateUploadInputBox>
                    </UserUpdateUpload>
                    <UpdateButton>Update</UpdateButton>
                </UserUPdateRightBox>
               </UserUpdateForm>
            </UserUpdate>
        </Bottom>
    </Container>
  )
}

export default User