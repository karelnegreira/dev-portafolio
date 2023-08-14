import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact', 
      name: formData.name, 
      email: formData.email, 
      message: formData.message, 
    };



    client.create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
  };

  return (
    <>
      <h4 className="head-text">Take five minutes and chat with me! </h4>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto: karelnegreira@gmail.com" className="p-text">karelnegreira@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +679 8950396" className="p-text">+679 - 895 - 0396</a>
        </div>
      </div>
      {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
        <div className="app-flex">
          <input className="p-text" 
              type="text" 
              placeholder="your name" 
              name="name"
              value={name} 
              onChange={handleChangeInput} 
          />
        </div>
        <div className="app-flex">
          <input className="p-text" 
              type="text" 
              placeholder="your email" 
              name="email"
              value={email} 
              onChange={handleChangeInput} 
          />
        </div>
        <div>
          <textArea 
            className="p-text"
            placeholder="Your message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" onClick={handleSubmit}> { !loading ? 'Send message' : 'Sending...' } </button>
      </div>
      ) : ( 
      <div> 
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>
       )}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app_whitebg');