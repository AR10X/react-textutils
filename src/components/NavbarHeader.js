import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';
import ToggleDarkMode from './ToggleDarkMode';

function NavbarHeader(){
    
    return (
        <>
            <style type='text/css'>
            {`  
            body {
                background-color: #070944;
            }
            .navbar-container {
                font-family: 'Courier New', Courier, monospace;
                background-color: #070944;
            }
            .navbar-custom {
                font-family: 'Courier New', Courier, monospace;
                font-size: 30px;
                font-weight: 600;
                color: #E7CCB1;
            }
            .nav-link {
                color: #E7CCB1;
                font-weight: 600;
                font-size: 20px;
            }
            .form-control {
                width: 45vw;
                margin-top: auto;
                border-radius: 20px;
                background-color: transparent;
                color: #E7CCB1;
                border: 2px solid #E7CCB1;
            }
            .form-control::placeholder {
                color: #E7CCB1;
            }
            .btn-form {
                margin-left: 30px;
                color: #070944;
                background-color: #E7CCB1;
                font-weight: 600;
                border-radius: 0;
            }

            `}
            </style>
            <Navbar className='navbar-container' >
                <Container>
                    <Navbar.Brand href='/home' className='navbar-custom'>
                        TextUtils
                    </Navbar.Brand>
                    {/* <Form  className='mx-auto d-flex'>
                        <FormControl type='text' placeholder='Search' className='form-control' />
                        <Button variant='outline-light' className='ml-auto btn-form'>Search</Button>
                    </Form> */}
                    <Nav className='me-auto'>
                        <Nav.Item>
                            <Nav.Link href='/home'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/about'>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <ToggleDarkMode />
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarHeader;