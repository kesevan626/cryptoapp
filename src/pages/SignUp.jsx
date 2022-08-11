import React, {useState} from 'react'
import image from '../components/assets/des.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'

const SignUp = () => {
          const initialState = {
                    username: "",
                    name: "",
                      email: "",
                      password: "",
                      re_password: ""
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
                    <div className='signUp-page'>
                              <div className='flex-div'>
                                        <div className='sign_up-image'>
                                                  <img src={image} alt='' />
                                        </div>
                                        <div className='form'>
                                        <form className='form-group' method="POST">
                                        <TextField 
                                                  fullWidth
                                                  variant='outlined'
                                                  label='Username'
                                                  name="username"
                                                  type="text" 
                                                  size='small'
                                                  margin='normal'
                                                  className='form-control'
                                                  placeholder='Username'
                                                  value={state.username}
                                                  onChange={handleChange}
                                        />
                                        <TextField 
                                                  fullWidth
                                                  variant='outlined'
                                                  label='name'
                                                  name="name"
                                                  type="text" 
                                                  size='small'
                                                  margin='normal'
                                                  className='form-control'
                                                  placeholder='John Doe'
                                                  value={state.name}
                                                  onChange={handleChange}
                                        />
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
                                        <TextField 
                                                  fullWidth
                                                  variant='outlined'
                                                  label='Password'
                                                  name="re_password"
                                                  type="password" 
                                                  size='small'
                                                  margin='normal'
                                                  placeholder="Confirm-Password"
                                                  className='form-control'
                                                  value={state.re_password}
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
                    </div>
          )
}

export default SignUp