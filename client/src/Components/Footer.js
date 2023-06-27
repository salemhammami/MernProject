import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    
      <MDBFooter className='fixed-bottom'>
      <div className='text-center p-4 text-white' style={{ backgroundColor: 'black'}}>
        © 2021 Copyright
        <a className='text-reset fw-bold ' href='#'>
</a>
      </div>
    </MDBFooter>
  )
}

export default Footer