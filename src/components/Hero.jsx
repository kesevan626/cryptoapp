import React from 'react'
import bgImage from './assets/bg.jpg'

import Button from '@mui/material/Button'
import {FaApple, FaGooglePlay} from 'react-icons/fa';


const Hero = () => {
            return (
                        <div className='hero'>
                                    <div className="hero-div">
                                                <img src={bgImage} alt=""  className='hero-image'/>
                                                <div className='overlay'></div>
                                                <div className='hero-content'>
                                                            <div className="content">
                                                                         <h3>The Only <strong>Crypto</strong> Solution You'll Ever Need.</h3>
                                                                         <p>Join Millions Of People Around The World In Exploring  the 
                                                                             beautiful World of Crypto In Buying And Selling cryptocurrencies in a secure,
                                                                             <span className='sub-brand'>Verse </span>
                                                                               and seamless way                                                                         
                                                                         </p>
                                                                         <div className="hero-btn">
                                                                             <Button  variant='contained' 
                                                                                    style={{color:'white', backgroundColor: 'green', margin: '20px 10px'}} 
                                                                                    endIcon={<FaGooglePlay />}
                                                                                    margin='normal'
                                                                                    className='google-btn'>
                                                                                    Get on Google Play
                                                                             </Button>
                                                                             <Button  variant='outlined' 
                                                                                    style={{color:'white', margin: '20px 10px'}} 
                                                                                    endIcon={<FaApple />}
                                                                                    className='apple-btn'
                                                                                    margin='normal'>
                                                                                    Get on ios 
                                                                             </Button>
                                                                       </div>
                                                            </div>
                                                 </div>
                                    </div>                           
                        </div>
            )
}

export default Hero