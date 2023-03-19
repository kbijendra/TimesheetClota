import React from "react";
import { Card } from "react-bootstrap";



const Contactus = () => {
  return (
    <>
    <div className="container ">

    <Card className="shadow Contact-box">

<Card.Body>

<form>
     
     <input type="text" className="input-field" placeholder="Your Name"/><br/>
     <input type="email" className="input-field" placeholder="Your Email"/><br/>
     <input type="text" className="input-field" placeholder="Mobile Number"/><br/>
     <textarea type="text" className="input-field textarea-field"
     placeholder="Your message"></textarea> <br/>
     <button type="button" className="btn">Submit</button>
   </form>
</Card.Body>

    </Card>
    </div>
    

         </>
  );
};

export default Contactus;
