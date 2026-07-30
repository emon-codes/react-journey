import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import SectionHeading from '../Components/SectionHeading'

const Root = () => {
  return (
      <>
          <Header></Header>
          <Outlet />
          
          <Footer/>
      
      </>
  )
}

export default Root