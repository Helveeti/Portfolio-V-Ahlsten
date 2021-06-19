import React, {useState} from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    var utils = require('./Utilities');

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ppd35tr', 'template_m3ofbek', e.target, 'user_kA552RWBjXypihK7hH5DY')
            .then((result) => {
                console.log(result.text);
                handleReset();
            }, (error) => {
                console.log(error.text);
            });
    };

    function handleReset(){
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = '')
        );
        Array.from(document.querySelectorAll('textarea')).forEach(
            input => (input.value = '')
        );
    }

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <br/>
                <p><strong>Name:</strong><strong style={{"margin-left": "41%"}}>Email:</strong></p>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Name'
                    style={{"width": "40%"}}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    style={{"float": "right", "width": "50%"}}
                />
                <hr/>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    style={{"width": "100%"}}
                />
                <br/>
                <br/>
                <textarea
                    type='text'
                    name='message'
                    placeholder='Message'
                    style={{"height": "200px", "width": "100%"}}
                />
                <hr/>
                <button type='submit' style={{"width": "30%"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact