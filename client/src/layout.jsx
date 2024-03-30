import React from 'react'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <main>
        <Announcement/>
        <Navbar/>
        <Outlet/>
        <Newsletter/>
        <Footer/>
    </main>
  )
}

export default Layout