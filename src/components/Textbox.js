import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Form, Button, Alert} from 'react-bootstrap';



function Textbox(){
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };
    
    const handleCountClick = ()=>{
        const words = text.match(/\b\w+\b/g);
        setCount(words.length);
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        setText('');
    }
    
    // const {isDarkMode} = props;

    // const darkModeHeading = {
    //     color: isDarkMode? "#E7CCB1" : "#000",
    // };
    return(
        <>
            <style>
            {`
            .textbox-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .form-control {
                font-family:'Courier New', Courier, monospace;
                border-radius: 0px;
            }
            .form-control:focus {
                background-color: #E7CCB1;
                color: #000;
            }
            .heading{
                margin-top: 5vh;
                margin-bottom: 5vh;
                color: #E7CCB1;
                font-family:'Courier New', Courier, monospace;
                font-weight: 600;
                text-align: center;
            }
            .btn-uppercase {
                margin: 20px 20px 20px auto;
                color: #070944;
                background-color: #E7CCB1;
                font-weight: 600;
                border-radius: 0;
                
            }
            .btn-lowercase {
                margin-right: 20px;
                color: #070944;
                background-color: #E7CCB1;
                font-weight: 600;
                border-radius: 0;
            }
            
            .heading-result {
                color: #E7CCB1;
                font-family:'Courier New', Courier, monospace;
            }
            .btn-cnt-words {
                margin-right: 20px;
                color: #070944;
                background-color: #E7CCB1;
                font-weight: 600;
                border-radius: 0;
            }
            .btn-clear {
                color: #070944;
                background-color: #E7CCB1;
                font-weight: 600;
                border-radius: 0;
            }
            .p-result {
                color: #E7CCB1;
                font-family:'Courier New', Courier, monospace;
            }
            .result-alert {
                background-color: black;
            }
            .form-label {
                font-family:'Courier New', Courier, monospace;
                color: #E7CCB1;
                font-size: 20px;
                font-weight: 300;
            }
            @media (max-width: 768px) {
                .textbox-container {
                    flex-direction: column;
                    align-items: center;
                }
                .form-control {
                    width: 90vw;
                    margin: 0 auto;
                }
                .form-label {
                    display : block;
                    text-align: center;
                    
                }
                .buttons {
                    margin: 10px auto;
                    width: 90vw;
                    display: block;
                }
                .button-group {
                    display: block;
                    
                }
            }
            
            `}
            </style>
            <h3 className="heading" >
                Text Analysis and Converter
            </h3>
            <div className="textbox-container">
                <Form>
                    <Form.Group controlId="textbox-group">
                        <Form.Label className="form-label">Enter the text below</Form.Label>
                        <Form.Control className="form-control" as="textarea" rows={12} value={text} onChange={(e)=> setText(e.target.value)} />
                        <div className="button-group">
                            <Button variant="outline-light" className="btn-cnt-words buttons" onClick={handleCountClick} >Count Words</Button>
                            <Button variant="outline-light" className="btn-uppercase buttons" onClick={handleUpClick} >Convert to UPPERCASE</Button>
                            <Button variant="outline-light" className="btn-lowercase buttons" onClick={handleLowClick} >Convert to lowercase</Button>
                            <Button variant="outline-light" className="btn-clear buttons" onClick={handleClearClick} >Clear Text</Button>
                        </div>
                        {count >0  && (
                            <Alert variant="success" className="result-alert">
                                <p className="p-result" >
                                    The no. of words: {count} <br></br>The no. of characters: {text.length}
                                </p>
                            </Alert>
                        )}
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

export default Textbox;