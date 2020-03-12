import React from 'react';
import './ContactSection.css'

const ContactSection = () =>{
    return(
        <div>
            <h1>Contact Us</h1>
            <form className='formulario'>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email address'/>
                <input type='text' placeholder='Subject'/>
                <textarea placeholder='message'></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}
export default ContactSection