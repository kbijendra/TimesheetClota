import React from 'react'
import { Link } from 'react-router-dom';
import ClotaLogo from "../images/ClotaLogo.jpg"



const Footer = () => {
  return (
<>
  
<footer  id="footer" className="container-fluid bg-dark text-white">
    <div className="row">
    <div className="col-md mt-3">
          <a href="https://www.clotatech.com/" className="h5"
            ><img
              src={ClotaLogo}
              alt="clotalogo"
              height="95"
              width="99"
              className="rounded mt-2 ms-3"
            />
            Clota Technology
          </a>
          <p>It's our passion for technologies which lead us here.</p>
        </div>

        <div className="col-md sections">
          <ul style={{listStyle:'none'}}>
            <h5>Site Links</h5>
            <li>
              <Link to="/home" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/clota" >Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-md sections3">
          <ul style={{listStyle:'none'}}>
            <h5>Stay In Touch</h5>
            <a href="https://www.facebook.com/ClotaTech"><i className="Social-icons fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/ClotaTech/"><i className="Social-icons fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/ClotaTech"><i className="Social-icons fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ClotaTech"><i className="Social-icons fa-brands fa-linkedin"></i></a>
            <a href="https://api.whatsapp.com/send?phone=917569192527&text=hi i am <EnterYourName> and i'm enquiriying through your Blog <Type Your Message>" target="_clota"><i className="fa-brands fa-whatsapp"></i></a>
        </ul>
        <ul style={{listStyle:'none'}}>
        <a href="tel:756-919-2527"><i className="fa-sharp fa-solid fa-phone-volume"></i></a>
        <a href="tel:756-919-2527" className="h5 ms-3">Click To Call </a> 
       <hr></hr>
        <a href="tel:756-919-2527"><i className="fa-sharp fa-solid fa-envelope mr-4"></i></a> 
        <a href="mailto:support@clotatechnology.com?subject=Enquiry"className="h6 ms-3">support@clotatechnology.com </a>
          </ul>
        </div>

    </div>
    <p className="Copyright">
        © Copyright 2023 Clota Technology - All Rights Reserved
      </p>
</footer>



</>



 
 
  );
};

export default Footer;