import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styled from 'styled-components'
import app from '../firebase';
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
const Input=styled.input`
height: 30px;
padding: 20px;
border: 1px solid gray;
border-radius: 5px;
`
const Title=styled.h1``
const Label=styled.label`
font-size: 14px;
font-weight: 600;
color: rgb(151,150,150);
margin-bottom: 5px;
`
const Container=styled.div`
    flex: 4;
    padding: 20px;
`
const NewProductForm= styled.form`
    display: flex;
    flex-direction: column;
`
const NewProductItem=styled.div`
width:400px;
margin-top: 10px;
margin-right: 20px;
display: flex;
flex-direction: column;
`

const Select=styled.select`
  
   padding: 10px;
`
const Option=styled.option``
const NewProduct = () => {
    const [img,setImg]=useState()



const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    const fileName=new Date().getTime()+ img.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );

}

  
  return (
    <Container>
    <Title>Create New Product</Title>
    <NewProductForm onSubmit={handleSubmit}>
        <NewProductItem>
            <Label>Image</Label>
            <Input type='file'onChange={(e)=>setImg(e.target.files[0])} style={{border:'none',padding:'5px 0'}}/>
        </NewProductItem>
        <NewProductItem>
            <Label> Product Name</Label>
            <Input type='text'/>
        </NewProductItem>
        <NewProductItem>
            <Label>Stock</Label>
            <Input type='number'/>
        </NewProductItem>
        <NewProductItem>
        <Label>Active</Label>
                <Select>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
        </NewProductItem>
        <Button>Create</Button>
        </NewProductForm>
        </Container>)
}

export default NewProduct