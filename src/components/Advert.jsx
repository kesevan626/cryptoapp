import React from 'react'
import Button from '@mui/material/Button'

const Advert = () => {
          return (
                    <div className='Advert-container'>
                              <div className='Advert-left'>
                                        <div className='Advert-header'>
                                                  <h3>Accept payments globally with <strong>cryptocurrency</strong>. Be limitless</h3>
                                        </div>
                                        <div className='Advert-subheader'>
                                                  Enjoy borderless payment with cryptoverse Business.
                                                   Our solution is <strong>user-friendly</strong>,<strong> fast</strong> and <strong>secure</strong>
                                        </div>
                                        <div className='Advert-btn'>
                                                  <Button variant='contained' sx={{backgroundColor: 'rgb(239, 204, 6)', marginRight: '30px', padding: '10px 25px'}}>
                                                            Get Started
                                                  </Button>
                                                  <Button variant='outlined'sx={{padding: '10px 25px', color: 'white', borderColor: 'white'}}>
                                                            Contact Sales
                                                  </Button>
                                        </div>
                              </div>
                    </div>
          )
}

export default Advert