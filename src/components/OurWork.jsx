import React from 'react'
import bg2 from '../components/assets/2bg.jpg'
import bg3 from '../components/assets/bg3.jpg'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const OurWork = () => {
          return (
                    <div className='work-div'>
                              <img src={bg3} alt='' />
                              <div className='work-card'>
                                        <Card sx={{ maxWidth: 445 }}>
                                                  <CardHeader
                                                  title="Our Team"
                                                  subheader="September 14, 2016"
                                                  style={{ background: 'transparent'}}
                                                  >                                            
                                                  </CardHeader>
                                                  <CardMedia
                                                  component="img"
                                                  height="150"
                                                  image={bg2}
                                                  alt="Paella dish"
                                                  />
                                                  <CardContent>
                                                            <Typography variant="body2" color="text.secondary">
                                                                      This impressive paella is a perfect party dish and a fun meal to cook
                                                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                                      if you like.
                                                            </Typography>
                                                  </CardContent>
                                        </Card>
                              </div> 
                              <div className='work-card2'>
                                        <Card sx={{ maxWidth: 445 }}>
                                                  <CardHeader
                                                  title="Our CEO"
                                                  subheader="September 14, 2016"
                                                  >                                            
                                                  </CardHeader>
                                                  <CardMedia
                                                  component="img"
                                                  height="150"
                                                  image={bg2}
                                                  alt="Paella dish"
                                                  />
                                                  <CardContent>
                                                            <Typography variant="body2" color="text.secondary">
                                                                      This impressive paella is a perfect party dish and a fun meal to cook
                                                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                                      if you like.
                                                            </Typography>
                                                  </CardContent>
                                        </Card>
                              </div> 
                              <div className='work-card3'>
                                        <Card sx={{ maxWidth: 445 }}>
                                                  <CardHeader
                                                  title="Our Work Our Passion"
                                                  subheader="September 14, 2016"
                                                  >                                            
                                                  </CardHeader>
                                                  <CardMedia
                                                  component="img"
                                                  height="150"
                                                  image={bg2}
                                                  alt="Paella dish"
                                                  />
                                                  <CardContent>
                                                            <Typography variant="body2" color="text.secondary">
                                                                      This impressive paella is a perfect party dish and a fun meal to cook
                                                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                                      if you like.
                                                            </Typography>
                                                  </CardContent>
                                        </Card>
                              </div>
                              
                    </div>
          )
}

export default OurWork