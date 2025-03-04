/*import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);

    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="phone">Phone:</label>
          <input 
            id="phone" 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "250px" }}
          />
        </div>
        <button style={{ padding: "5px 10px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;*/
/*import { useState } from 'react';
import './App.css'; // Import the external CSS file

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);

    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input 
              id="email" 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              id="phone" 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;*/

import { useState } from 'react';
import './App.css'; // Import the external CSS file

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // For confirmation message

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log("Form Submitted:", contactUsInformation);

    // Show success message
    setSuccessMessage("Thank you! Your form has been submitted.");

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={onSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              id="phone" 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Phone Type Dropdown */}
          <div>
            <label htmlFor="phoneType">Phone Type:</label>
            <select 
              id="phoneType" 
              value={phoneType} 
              onChange={(e) => setPhoneType(e.target.value)}
              required
            >
              <option value="" disabled>Select a phone type...</option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </select>
          </div>

          {/* Comments Field */}
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="4"
              placeholder="Enter your comments..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

