import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsWhatsapp,BsFillChatLeftDotsFill,BsFillPeopleFill,BsFillCaretRightFill,BsFillChatFill } from "react-icons/bs";
import './Header.css' ;

function Header() {
  return (
    <>
        
        <nav>
        <div>
            <NavLink to="/">
                <BsWhatsapp className='logo'/>
            </NavLink>
        </div>
        <div>
            <ul>
                <li>
                <BsFillChatLeftDotsFill/> <NavLink to="/">INBOX</NavLink>
                </li>
                <li>
                   <BsFillPeopleFill/> <NavLink to="/contacts">CONTACTS</NavLink>
                </li>
                <li>
                   <BsFillChatFill/> <NavLink to="/broadcast">BROADCASTS</NavLink>
                </li>
                <li>
                    <BsFillCaretRightFill/><NavLink to="/automation">AUTOMATION</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Header
