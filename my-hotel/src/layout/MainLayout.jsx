import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    
      <Box sx={{width:'100%',bgcolor:'#7a1f1f'}}>
        <Navbar />
       <Box sx={{maxWidth:'90rem',marginInline:'auto',flexGrow:1}}>
         {children}
       </Box>
        <Footer />
    </Box>
  
  )
}

export default MainLayout
