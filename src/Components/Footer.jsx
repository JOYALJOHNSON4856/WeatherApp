import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>   <MDBFooter style={{backgroundColor:'blue'}} className='text-center text-lg-left'>
    <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-light' href='https://mdbootstrap.com/'>
        WeatherApp
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer