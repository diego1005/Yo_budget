import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='footer'>
      <div className="footleft">
        © 2022, made with <i className="fa-solid fa-heart"></i> by <Link className="foot-link" to="#"><b>Me</b></Link> for a better web.
      </div>
      <div className="footright">
        <ul className='footlist'>
          {/* create a footicon element */}
          <li>
            <Link to="#" className='foot-link'>
              <img className='icon' src="img/linkedin.png" alt="in" />
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              <img className='icon' src="img/facebook.png" alt="fb" />
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              <img className='icon' src="img/charla.png" alt="contact" />
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              <img className='icon' src="img/whatsapp.png" alt="wtp" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer