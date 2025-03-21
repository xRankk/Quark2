import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_1pnju7v',      	
      'template_arrod6b',      
      formData,                // Data to send
      '_6X_jmx1L5Bh1I0la'         
    ).then(
      (result) => {
        alert('Message Sent Successfully');
      },
      (error) => {
        alert('An error occurred, Please try again', error.text);
      }
    );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <main className="row">
        <section className="col left">
          <div className="contactTitle">
            <h2>Contact</h2>
            <p>Pentru mai multe detalii ne puteti contacta folosind detaliile de mai jos.</p>
          </div>
          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="details">
                <span>Tel</span>
                <span>076620019</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="details">
                <span>Email</span>
                <span>calin.silvian@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
        <section className="col right">
          <form className="messageForm" onSubmit={handleSubmit}>
            <div className="inputGroup halfWidth">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Numele tau</label>
            </div>
            <div className="inputGroup halfWidth">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputGroup fullWidth">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label>Subiect</label>
            </div>
            <div className="inputGroup fullWidth">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label>Mesaj</label>
            </div>
            <div className="inputGroup fullWidth">
              <button type="submit">Trimite</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
