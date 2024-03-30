import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Charts from '../components/Charts'
import { productData } from '../data'
import { Publish } from '@mui/icons-material'
const Container=styled.div`
    flex: 4;
    
    padding: 20px;
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
const CreateButton=styled.button`
border: none;
border-radius: 10px;
padding:5px 10px;
color: white;
background-color: #329032;
font-size: 16px;
   
`
const ProductInfo=styled.div`
display: flex;
`
const ProductInfoLeft=styled.div`
flex:1;`
const ProductInfoRight=styled.div`
flex: 1;
padding: 20px;
margin: 20px;
box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;

`
const Title=styled.h1``
const ProductInfoTop=styled.div`
display: flex;
align-items: center;
`
const ProductInfoBottom=styled.div`
display:flex;
flex-direction: column;
margin-top: 10px;
`
const ProductInfoItem=styled.div`
display:flex;
width: 150px;
align-items: center;
justify-content: space-between;
`
const ProductInfoKey=styled.span``
const ProductInfoValue=styled.span``
const ProductName=styled.span`
font-weight: 600;
`
const Img=styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 5px;
`

const ProductFormBox=styled.div`
padding: 20px;
margin:20px ;
box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;

    
`
const ProductForm=styled.form`
display: flex;
justify-content: space-between;
    
`
const ProductFormLeft=styled.div`
    
`
const ProductFormRight=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductFormItem=styled.div`
margin: 5px 0;
display:flex ;
flex-direction: column;
`
const Select=styled.select`
margin-bottom: 10px;
padding: 5px;
    
`
const Option=styled.option`
    
`
const Label=styled.label`
margin-bottom: 10px;
color: gray;
`

const Input=styled.input`
border: none;
padding: 5px;
margin-bottom: 10px;
border-bottom: 1px solid gray;
`
const ProductUpload=styled.div`
display: flex;
align-items: center;
`
const UploadImg=styled.img`
    width: 100px;

height: 100px;
border-radius: 10px;
object-fit: cover;

`
const Button=styled.button`
    padding: 5px;
    font-weight: 600;
    color: #fff;
    background-color: darkblue;
    border-radius: 5px;
    font-size: 16px;
 `
const Product = () => {
  return (
    <Container>
       <Top>
        <Title>Product</Title>
        <CreateButton>Create</CreateButton>
        </Top> 
        <ProductInfo>
            <ProductInfoLeft>
<Charts data={productData} dataKey={'pv'} title={'Sales Perfomance'} />
            </ProductInfoLeft>
            <ProductInfoRight>
                <ProductInfoTop>
                    <Img src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <ProductName>Apple Airpod</ProductName>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <ProductInfoItem>
                        <ProductInfoKey>Id:</ProductInfoKey>
                        <ProductInfoValue>123</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Sales:</ProductInfoKey>
                        <ProductInfoValue>$5125</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>active:</ProductInfoKey>
                        <ProductInfoValue>yes</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>In Stock:</ProductInfoKey>
                        <ProductInfoValue>No</ProductInfoValue>
                    </ProductInfoItem>
                   
                </ProductInfoBottom>
            </ProductInfoRight>
        </ProductInfo>
        <ProductFormBox>
            <ProductForm>
              <ProductFormLeft>
                <ProductFormItem>
                <Label>Product Name</Label>
                <Input/>
                </ProductFormItem>
                <ProductFormItem>
                <Label>In Stock</Label>
                <Select>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
                </ProductFormItem>
                <ProductFormItem>
                <Label>Active</Label>
                <Select>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
                </ProductFormItem>
        
              </ProductFormLeft>
              <ProductFormRight>
                      <ProductUpload>
                        <UploadImg src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                        <Label htmlFor='file'><Publish/>
                        </Label>
                        <Input type='file' id='file' style={{display:'none'}}/>
                      </ProductUpload>
                      <Button>Upload</Button>
              </ProductFormRight>

            </ProductForm>

        </ProductFormBox>
    </Container>
  )
}

export default Product