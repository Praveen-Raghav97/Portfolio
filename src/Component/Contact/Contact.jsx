import React from 'react'
import './Contact.css'

import location_icon from '../../assets/location1.png.png'
import mail_icon from '../../assets/gmailneon.png.png'
import phone_icon from '../../assets/Phone.png'
import msg_icon from '../../assets/massage.png'
import white_Arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59f0b0f8-9531-4398-b9e4-5c33f682e36c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Send me a massage <img src={msg_icon} alt="" /></h3>
           <p>Feel free to reach out thorugh contact form or find our contact
            information below, Your feedback, Questions, and suggetions are
            important to me as we strive to provide exceptional service to me.
             </p>
            <ul>
                <li> <a href="rishavthakur@gmail.com"></a><img src={mail_icon} alt="" />rishavthakur9027@gmail.com</li>
                <li> <a href=""><img src={phone_icon} alt="" /></a>+9027768705</li>
                <li> <a href="https://www.google.com/maps/place/Aligarh,+Uttar+Pradesh/@27.9083686,78.0818646,12.35z/data=!4m6!3m5!1s0x3974a48686459c8b:0x95d967276d323613!8m2!3d27.8973944!4d78.0880129!16zL20vMDJjYjY2?entry=ttu"><img src={location_icon} alt="" />Aligrah , Uttar Pradesh (India.)</a>
                 </li>
            </ul>
      </div>
      <div className="contact-col">
      <form onSubmit={onSubmit} >
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name.' required/>
            <label >Phone Number</label>
            <input type="phone" name='name' placeholder='Enter Your Mobile Number.' required/>
            <label > Your Email</label>
            <input type="email" name='phone' placeholder='Enter Your Email.' required/>
            <label >Write a massage here</label>
            <textarea name="massage"  rows="6" placeholder='Enter your massage' required></textarea>
            <button type = "submit" className='btn dark-btn'>Submit <img src={white_Arrow} alt="" /></button>
           </form>
           <span>{result}</span>
        
      </div>
    </div>
  )
}

export default Contact
