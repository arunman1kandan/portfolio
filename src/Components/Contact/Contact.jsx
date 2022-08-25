import React,{useRef, useState} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const [done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_efcdeuf', 'template_sab7jtw', form.current, 'tHXFXxsuSS0eTBYAt')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
        <div className="contactLeft">
            <div className="servicesLeft">
                <span>Get in touch!</span>
                <span>Contact Me</span>

                <div className="blur contactBlur" style={{background : "#ABF1FF94" , left : "1rem" , top : "10rem"}}></div>
            </div>
        </div>
        <div className="contactRight">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user_name' placeholder='Name'  required/>
                <input type="email" name="user_email"  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className='user' placeholder='Email' required />
                <textarea name="message" className='user' placeholder='Message' required/>
                <button className="gButton buttonC">Submit</button>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur contactBlur2" style={{background : "var(--purple"}}></div>
            </form>
        </div>
    </div>

  )
}

export default Contact