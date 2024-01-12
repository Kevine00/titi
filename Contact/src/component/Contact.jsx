import React from 'react'
import './contact.css'
import phone from '.././assets/phone.jpg'
import pic2 from '../assets/pic2.png'
import pic from '../assets/pic.png'

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className='par-par1'>

    <div  className='container-section'>
        <h1 className='title-contact'>CONTACT US</h1>

<div className='div1-contact'>
      <div className='content-contact'>
        <form>
        <h5>leave us message</h5>
<input type="text"  name='name' placeholder='First_Name Last_Name'/>
<input type="text"  name='email' placeholder='Email Address'/>
<textarea name="message" id="message" cols="52" rows="8" placeholder='Your message'></textarea>
<br />
<br />
<button className='send-button'>Send</button>
        </form>
      </div>

 <div className='picture-image'>
 <img src={phone} alt="image" height={240} width={240} />
 </div>
 </div>
   </div>

  
  </div>
     <div className='table-pictures'>
     <div><img src={pic2} alt="" /></div>
     <div><img src={pic} alt="" /></div> 
     </div>
    </section>

  )
}

export default Contact
