import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    flex: 4;
    padding: 20px;
`
const NewUserForm= styled.form`
    display: flex;
    flex-wrap: wrap;
`
const NewUserItem=styled.div`
width:400px;
margin-top: 10px;
margin-right: 20px;
display: flex;
flex-direction: column;
`
const LabelRadio = styled.label`
margin:10px;
font-size: 18px;
color: #555;
`
  const Select=styled.select`
  height: 40px;
  border-radius: 5px;
  `
  const Option=styled.option``  
const NewUserGender=styled.div``
const Input=styled.input`
height: 30px;
padding: 20px;
border: 1px solid gray;
border-radius: 5px;
`
const Label=styled.label`
font-size: 14px;
font-weight: 600;
color: rgb(151,150,150);
margin-bottom: 5px;
`
const Button=styled.button`
border:none;
background-color: darkblue;
padding: 7px 10px;
cursor: pointer;
color: #fff;
border-radius: 10px;
width: 200px;
font-weight: 600;
margin-top: 30px;

`
const InputRadio=styled.input``
const Title=styled.h1``
const NewUser = () => {
  return (
    <Container>
        <Title>Create New User</Title>
        <NewUserForm>
            <NewUserItem>
                <Label>Username</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Full Name</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Email</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Phone Number</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Address</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Password</Label>
                <Input/>
            </NewUserItem>
            <NewUserItem>
                <Label>Gender</Label>
                <NewUserGender>
                <InputRadio type='radio' name='male' id='male' />
                <LabelRadio htmlFor='male'>male</LabelRadio>
                <InputRadio type='radio' name='female' id='female'/>
                <LabelRadio htmlFor='female'>female</LabelRadio>
                </NewUserGender>
            </NewUserItem>
            <NewUserItem>
                <Label>Active</Label>
                <Select>
                    <Option>Yes</Option>
                    <Option>No</Option>
                </Select>
            </NewUserItem>
            <Button>Create</Button>
        </NewUserForm>
    </Container>
  )
}

export default NewUser