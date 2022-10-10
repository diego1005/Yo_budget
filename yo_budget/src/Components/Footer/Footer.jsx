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
              In icon
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              Fb icon
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              Contact icon
            </Link>
          </li>
          <li>
            <Link to="#" className='foot-link'>
              Wtp icon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer