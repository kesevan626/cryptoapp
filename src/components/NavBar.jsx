import { Divider } from '@mui/material';
import React, { useState} from 'react';
import {FaChevronCircleDown, FaBars, FaWindowClose} from 'react-icons/fa';
import { Link } from 'react-router-dom'


const NavBar = () => {
      const [ changeBackground , setchangeBackground ] = useState(false)
      const [ showNavbar, setshowNavbar ] = useState(false)
      window.addEventListener('scroll', (e)=>{
            if (window.scrollY > 50){
                  setchangeBackground(true)
            }else{
                  setchangeBackground(false)
            }
      })
            return (
                        <div className='navbar' id={changeBackground ? 'change' : null}>
                              <Link to='/'>
                                        <div className="nav-brand">
                                                  Crypto<span className='sub-brand'>Verse</span>
                                        </div>
                              </Link>
                                        <nav className="nav-links" id={showNavbar && 'show'}>
                                                <ul>
                                                            <li>About Us</li>
                                                            <li>Product <FaChevronCircleDown style={{marginLeft: '6px'}}/></li>
                                                            <li>Learn</li>
                                                            <li>Resources <FaChevronCircleDown style={{marginLeft: '6px'}}/></li>
                                                            <li className='link-center'>Careers</li>
                                                  </ul>
                                                  <Divider />
                                                  <div className='auth-div'>
                                                            <ul>
                                                                      <Link to='/login'>
                                                                                <li className='login-btn'>Sign In</li>
                                                                      </Link>
                                                                      <Link to='/sign-up'>
                                                                                <li className='register-btn'>Create an account</li>
                                                                      </Link>
                                                            </ul>
                                                  </div>
                                        </nav>
                                        <div className='bar'>
                                                  { !showNavbar ? <FaBars onClick={()=>setshowNavbar(!showNavbar)} /> : 
                                                      <FaWindowClose onClick={()=>setshowNavbar(!showNavbar)} />}
                                        </div>
                                        
                                    
                        </div>
            )
}

export default NavBar