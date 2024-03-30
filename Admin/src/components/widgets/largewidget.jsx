import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
   flex: 2;
   padding: 20px;
   box-shadow: 0px 0px 11px -1px #d0c8c8;
-webkit-box-shadow: 0px 0px 11px -1px #d0c8c8;
-moz-box-shadow: 0px 0px 11px -1px #d0c8c8;
`

const Title = styled.span`
font-size: 22px;
font-weight: 600; 
`
const Table=styled.table`
  width: 100%;
  border-spacing: 20px;
`
const TableRow=styled.tr`
  
`
const TableHeader=styled.th`
  text-align: left;
`
const UserData=styled.td`
  display: flex;
  align-items: center;
`
const DateData=styled.td`
  font-weight: 300;
`
const AmountData=styled.td`
  font-weight: 300;
`
const StatusData=styled.td`
  
`
const UserName = styled.span`
font-weight: 600;`
const Img = styled.img`
width:40px;
height:40px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;

`
const Button=styled.button`
border:none;
padding: 5px 7px;
border-radius: 10px;
  background-color: ${({type})=>type==='approved' && '#e5faf2'};
  background-color: ${({type})=>type==='declined' && '#fff0f1'};
  background-color: ${({type})=>type==='pending' && '#ebf1fe'};
  color: ${({type})=>type==='approved' && '#3bb077'};
  color: ${({type})=>type==='declined' && '#d95087'};
  color: ${({type})=>type==='pending' && '#3bb077'};
`
const Largewidget = () => {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <TableRow>
          <TableHeader>Customer</TableHeader>
          <TableHeader>date</TableHeader>
          <TableHeader>amount</TableHeader>
          <TableHeader>status</TableHeader>

        </TableRow>
        <TableRow>
          <UserData>
            <Img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=80&w=785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <UserName>Susan carol</UserName>
          </UserData>
          <DateData>2 Jun 2023</DateData>
          <AmountData>$122.00</AmountData>
          <StatusData>
            <Button type='approved'>approved</Button>
          </StatusData>
        </TableRow>
        <TableRow>
          <UserData>
            <Img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=80&w=785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <UserName>Susan carol</UserName>
          </UserData>
          <DateData>2 Jun 2023</DateData>
          <AmountData>$122.00</AmountData>
          <StatusData>
            <Button type='declined'>declined</Button>
          </StatusData>
        </TableRow>
        <TableRow>
          <UserData>
            <Img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=80&w=785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <UserName>Susan carol</UserName>
          </UserData>
          <DateData>2 Jun 2023</DateData>
          <AmountData>$122.00</AmountData>
          <StatusData>
            <Button type='approved'>approved</Button>
          </StatusData>
        </TableRow>
        <TableRow>
          <UserData>
            <Img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=80&w=785&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <UserName>Susan carol</UserName>
          </UserData>
          <DateData>2 Jun 2023</DateData>
          <AmountData>$122.00</AmountData>
          <StatusData>
            <Button type='approved'>approved</Button>
          </StatusData>
        </TableRow>
        
        

      </Table>
    </Container>
  )
}

export default Largewidget