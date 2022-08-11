
const Footer = () => {
          return (
                    <div className='footer-container'>
                              <div className=''>
                              <h4>InsideDepth</h4>

                              <div className=''>
                                        <h4>Links</h4>
                                        <ul>
                                                  <li className='text-muted'>Terms Of Service</li>
                                                  <li className='text-muted'>Privacy Policy</li>
                                                  <li className='text-muted'>Service</li>
                                        </ul>
                              </div>
                              </div>

                              <div className=''>
                                                  <h4>Pages</h4>

                                                  <div className=''>
                                                            <ul>
                                                                      <li className='text-muted'>Contact</li>
                                                                      <li className='text-muted'>About Us</li>
                                                                      <li className='text-muted'>PortFolio</li>
                                                            </ul>
                                                  </div>
                                                  <form onSubmit={(e)=>{e.preventDefault()}}>
                                                                                <h4>Subscribe</h4>
                                                                                <input type="text" name="" placeholder='Type Your Email' className='form-input'/>
                                                  </form>
                                                  <div>
                                                            <p className='text-muted'>@ 2022 Live in Powered by Keseven</p>
                                                  </div>
                              </div>
                    </div>
          )
}

export default Footer