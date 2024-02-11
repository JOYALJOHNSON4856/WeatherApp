import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <><MDBNavbar style={{backgroundColor:'blue'}}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
        <img
          src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63069/weather-icon-clipart-md.png'
          height='30'
          alt=''
          loading='lazy'
        />
        <h4 style={{color:'white',marginTop:'10px'}}>WEATHER APP</h4>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></>
  )
}

export default Header