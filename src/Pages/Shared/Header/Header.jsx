import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { FaUser } from 'react-icons/fa';
// import Image from 'react-bootstrap/Image';

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //   .then( () => {})
  //   .catch( error => console.error(error))
  // }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-3' expand="lg" bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand><Link to={'/'}>Dragon News</Link></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">All News</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">
                        {/* {
                          user.uid ?
                          <>                          
                          <span>{user?.displayName}</span>
                          <button onClick={handleLogOut}>Log out</button>
                          </>
                          :
                          <>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/register'}>Register</Link>
                          </>
                        } */}
                        
                      </Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                          {/* {
                            user.photoURL2 ?
                            <Image style={{height: '60px'}} roundedCircle src='user.photoURL'></Image>
                            : <FaUser></FaUser>
                          } */}
                      </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;