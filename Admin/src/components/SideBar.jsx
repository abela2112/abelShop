import React from 'react'
import styled from 'styled-components'
import { LineStyle,Timeline,TrendingUp } from '@mui/icons-material';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from 'react-router-dom';
const Container = styled.div`
    flex: 1;
    position: sticky;
    top: 40px;
    background-color: rgb(251,251,255);
    height: calc(100vh - 50px);
    width: 100%;
    bottom: 0;
`
const SideBarWrapper = styled.div`
padding:20px;
color: #555;



`

const SideBarMenu = styled.div`
padding:5px;
margin-bottom: 10px;

`
const SideBarList = styled.ul`
padding: 5px;
list-style: none;
`
const SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: rgb(240,240,255);
    }
`
const SideBarTitle=styled.h3`
    font-size: 13px;
    color: rgb(187,186,186);
`

const SideBar = () => {
    return (
        <Container>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                   
                        <SideBarList>
                            <SideBarListItem className='icon'>
                                <LineStyle /> Home
                            </SideBarListItem>
                            <SideBarListItem className='icon'>
                                <TimelineIcon /> Analytics
                            </SideBarListItem>
                            <SideBarListItem className='icon'>
                                <TrendingUpIcon /> Sales
                            </SideBarListItem>
                      

                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    
                     
                            <SideBarListItem className='icon'>
                                <LineStyle /> Home
                            </SideBarListItem>
                            <SideBarListItem className='icon'>
                                <TimelineIcon /> Analytics
                            </SideBarListItem>
                            <SideBarListItem className='icon'>
                                <TrendingUpIcon /> Sales
                            </SideBarListItem>
                       

                    
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    
                        <SideBarList>
                           <Link className='link' to={'/users'}>
                           <SideBarListItem className='icon'>
                                <LineStyle /> User
                            </SideBarListItem>
                           </Link>
                            <Link className='link' to={'/products'}>
                            <SideBarListItem className='icon'>
                                <TimelineIcon /> Products
                            </SideBarListItem></Link>
                            <SideBarListItem className='icon'>
                                <TrendingUpIcon /> Sales
                            </SideBarListItem>
                        </SideBarList>

                   
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Title</SideBarTitle>
                    
                        <SideBarList>
                            <SideBarListItem>
                                <LineStyle className='icon' /> Home
                            </SideBarListItem>
                            <SideBarListItem>
                                <TimelineIcon className='icon' /> Analytics
                            </SideBarListItem>
                            <SideBarListItem>
                                <TrendingUpIcon className='icon' /> Sales
                            </SideBarListItem>
                        </SideBarList>

                    
                </SideBarMenu>
            </SideBarWrapper>
        </Container>
    )
}

export default SideBar