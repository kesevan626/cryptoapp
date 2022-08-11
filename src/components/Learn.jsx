import React, {useState, useRef, useEffect} from 'react'
import bg from './assets/bg.jpg'
import Typography  from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, CardHeader } from '@mui/material';

const Learn = () => {
          const cardRef = useRef(null)
          const [ isVisible, setIsVisible ] = useState(false)

          const CallbackFunction = (entries) => {
                    const [ entry ] = entries
                    setIsVisible(entry.isIntersecting)
          }
          const options = {
                    root: null,
                    rootMargin: "150px",
                    threshold: 1
          }
          useEffect(() => {
                  const handleScroll = () =>{
                      const observer = new IntersectionObserver(CallbackFunction, options)
                       if(cardRef.current) observer.observe(cardRef.current)}           
                  
                  window.addEventListener("scroll", handleScroll)
                  return () => {
                        window.removeEventListener("scroll", handleScroll)
                  }
          });
          return (
                    <div className='learn-container'>
                              <div className="header-container">
                                        <div className='header'>
                                                  <h3>
                                                            Learn - Your Dictionary To Everything Crypto
                                                  </h3>
                                        </div>
                              </div>
                              <div className='learn-card'>
                                        <Card sx={{ maxWidth: 380, borderRadius: '15px' }} className={isVisible ? 'show' : 'card2'} ref={cardRef}>
                                                  <CardMedia
                                                            component="img"
                                                            height="194"
                                                            image={bg}
                                                            alt="Paella dish"
                                                  />
                                                  <CardHeader                                                           
                                                            subheader="September 14, 2016"
                                                            title="Shrimp and Chorizo Paella"
                                                  />
                                                  <CardContent>
                                                  <Typography variant="body2" color="text.secondary">
                                                            This impressive paella is a perfect party dish and a fun meal to cook
                                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                            if you like.
                                                  </Typography>
                                                  </CardContent>
                                        </Card>
                                        <Card sx={{ maxWidth: 380, marginTop: '15px',borderRadius: '15px'}} 
                                                  className={isVisible ? 'show' : 'card'} ref={cardRef}>
                                                  <CardMedia
                                                            component="img"
                                                            height="194"
                                                            image={bg}
                                                            alt="Paella dish"
                                                  />
                                                  <CardHeader                                                           
                                                            subheader="September 14, 2016"
                                                            title="Shrimp and Chorizo Paella"
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

export default Learn