import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



export default function ToggleDarkMode() {
    const [isDarkMode, setDarkMode] = useState(true);
    useEffect(()=>{
        const body = document.body.classList;
        const headingStyle = document.getElementsByClassName('heading')[0].style;
        const formLabelStyle = document.getElementsByClassName('form-label')[0].style;
        const formControlStyle = document.getElementsByClassName('form-control')[0].style;
        const buttons = document.getElementsByClassName('buttons');
        const navbarContainerStyle = document.getElementsByClassName('navbar-container')[0].style;
        const navbarCustomStyle = document.getElementsByClassName('navbar-custom')[0].style;
        const navlink = document.getElementsByClassName('nav-link');
        if(isDarkMode) {
            body.remove("body-dark-mode");
            headingStyle.color = "#E7CCB1";
            formLabelStyle.color = "#E7CCB1";
            formControlStyle.borderColor = "#E7CCB1";
            navbarContainerStyle.backgroundColor = "#070944";
            navbarCustomStyle.color = "#E7CCB1";
        } else {
            body.add("body-dark-mode");
            headingStyle.color = "#4F3850";
            formLabelStyle.color = "#4F3850";
            formControlStyle.borderColor = "#4F3850";
            navbarContainerStyle.backgroundColor = "#FEF5EE";
            navbarCustomStyle.color = "#4F3850";
        }
        for(let i=0; i<buttons.length; i++){
            if (isDarkMode) {
                buttons[i].style.color = '#4F3850';
                buttons[i].style.backgroundColor = '#E7CCB1';
              } else {
                buttons[i].style.color = '#E7CCB1';
                buttons[i].style.backgroundColor = '#4F3850';
              }
        }
        for(let i=0; i<navlink.length; i++){
            if (isDarkMode) {
                navlink[i].style.color = '#E7CCB1';
              } else {
                navlink[i].style.color = '#4F3850';
              }
        }
    },[isDarkMode])

    const handleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }
    return(
        <>
            <style>
                {`
                .body-dark-mode {
                    background-color: #FEF5EE;
                }
                .btn-darkmode {
                    background-color: #E7CCB1;
                    color: #070944;
                    border-radius: 30px;
                    font-weight: 600;
                }
                @media (max-width: 768px) {
                    .toggle-text {
                        display: none;
                    }
                }
                `}
            </style>
            <Button variant="outline-light" onClick={handleDarkMode} className='btn-darkmode'>
                <FontAwesomeIcon icon= {isDarkMode? faSun: faMoon} />{" "}
                <span className="d-none d-md-inline">
                    {
                        isDarkMode?'Light Mode':'Dark Mode'
                    }
                    </span>
            </Button>
        </>
    )
}