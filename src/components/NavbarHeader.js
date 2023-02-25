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
            @media (max-width: 768px) {
                    
                    .navbar-custom {
                        padding-left: 20px;
                    }
                    .dark-mode-comp {
                        margin-right: 30px;
                    }
                }
            `}
            </style>
            <Navbar className='navbar-container' >
                <Container>
                    <Navbar.Brand href='/home' className='navbar-custom'>
                        TextUtils
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#about'>About</Nav.Link>
                            <Nav.Link href='#contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ToggleDarkMode className="dark-mode-comp" />
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarHeader;