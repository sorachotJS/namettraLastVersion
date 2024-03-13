import React from 'react'
import HeaderComponent from '../components/frontend/HeaderComponent'
import FooterComponent from '../components/frontend/FooterComponent'

const FrontendLayourt = ({children}) => {
  return (
    <>
    <div className="page-wrapper">
  {/* Preloader */}
  
  <HeaderComponent />
        {children}
        <FooterComponent />
</div>

      
    </>
  )
}

export default FrontendLayourt