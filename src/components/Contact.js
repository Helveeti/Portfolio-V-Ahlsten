import React, {useState} from "react";
import emailjs from 'emailjs-com';
import ReCaptchaV2 from 'react-google-recaptcha';

const Contact = () => {
    var utils = require('./Utilities');
    const recaptchaRef = React.createRef();
    require('dotenv').config();

    const onSubmit = (e) => {
        e.preventDefault();

        const name = notEmpty(e.target.from_name.value);
        const email = notEmpty(e.target.email.value);
        const title = notEmpty(e.target.title.value);
        const message = notEmpty(e.target.message.value);

        const captcha = recaptchaRef.current.getValue();
        const token = notEmpty(captcha);

        if(validForm(name, email, title, message, token)) {
            /*sendEmail(e.target);*/
            console.log("Mail submitted.")
        }

    };

    function validForm(name, email, title, message, token){
        let valid = true;

        if(!title){
            console.log("Title missing");
            valid = false;
        }
        if(!message){
            console.log("Message missing");
            valid = false;
        }
        if(!name){
            console.log("Name missing");
            valid = false;
        }
        if(!email){
            console.log("Email missing");
            valid = false;
        }
        if(!token){
            console.log("Token missing");
            valid = false;
        }

        return valid;
    }

    function notEmpty(item){
        return item.length > 0;
    }

    function sendEmail(mail){
        emailjs.sendForm('service_ppd35tr', 'template_m3ofbek', mail, 'user_kA552RWBjXypihK7hH5DY')
            .then((result) => {
                console.log(result.text);
                handleReset();
            }, (error) => {
                console.log(error.text);
            });
    }

    function onChange(value){
        /*console.log(value);*/
    }

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
                <p><strong>Title:</strong></p>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    style={{"width": "100%"}}
                />
                <br/>
                <br/>
                <p><strong>Message:</strong></p>
                <textarea
                    type='text'
                    name='message'
                    placeholder='Message'
                    style={{"height": "200px", "width": "100%"}}
                />
                <br/>
                <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY}
                             ref={recaptchaRef}
                             onChange={onChange}
                />
                <hr/>
                <button type='submit' style={{"width": "30%"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact