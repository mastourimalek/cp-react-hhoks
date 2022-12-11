import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="icon"
              src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Movie App
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Aboutus')}>About us</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Contactus')}>Contact us</Nav.Link>
            <Nav.Link onClick={()=>navigate('./Amin')}>Admin</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar