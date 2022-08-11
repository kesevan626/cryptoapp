import React, {useState} from 'react'
// import image from '../components/assets/des.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'

const Login = () => {
          const initialState = {
                      email: "",
                      password: "",
                    }
                    let [state, setState] = useState(initialState)
      
                    const handleChange = e =>{
                      const {name, value} = e.target;
                      setState(prevState => ({
                          ...prevState,
                          [name]: value
                      }))
                    }
          return (
                           <div className='login-page'>
                                        <div className='login-form'>
                                              <form className='form-group' method="POST">
                                                        <TextField 
                                                                  fullWidth
                                                                  variant='outlined'
                                                                  label='Email'
                                                                  name="email"
                                                                  type="text" 
                                                                  size='small'
                                                                  margin='normal'
                                                                  className='form-control'
                                                                  placeholder='InsideDepth@gmail.com'
                                                                  value={state.email}
                                                                  onChange={handleChange}
                                                        />                             
                                                        <TextField 
                                                                  fullWidth
                                                                  variant='outlined'
                                                                  label='Password'
                                                                  name="password"
                                                                  type="password" 
                                                                  size='small'
                                                                  margin='normal'
                                                                  className='form-control'
                                                                  value={state.password}
                                                                  onChange={handleChange}
                                                        />               
                                                        <Button variant="outlined" 
                                                                  margin='normal'
                                                                  onClick={(e)=>{
                                                                  e.preventDefault()
                                                                  }}>
                                                                  Create
                                                        </Button>
                                                        
                                                        <p>Already Have an Account?
                                                                  <Link to="/login">Login</Link>
                                                        </p>
                                              </form>
                                        </div>
                              </div>   
          )
}

export default Login