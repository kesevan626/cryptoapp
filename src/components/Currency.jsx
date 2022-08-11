import React,{useEffect, useState} from 'react'
import axios from 'axios'
import CurrencyList from './CurrencyList'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import {FaAngleDoubleRight } from 'react-icons/fa';

const Currency = () => {
        const [coinData, setcoinData] = useState([])

        useEffect(()=>{
                var options = {
                        "method": "GET",
                        "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
                        "headers": {
                          "Content-Type": "application/json",
                        }
                      };
                axios(options)
                .then(res =>{
                          setcoinData(res.data)
                          console.log(res.data)
                })
                .catch(err =>{
                          console.log(err)
                })
        },[])
         
            return (
                        <div className='currency-tab'>
                                 <div className='currency-header'>
                                                <h3>Top 15 CryptoCurrency</h3>
                                </div> 
                                <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                                <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell align="right"></TableCell>
                                                        <TableCell align="right">Name</TableCell>
                                                        <TableCell align="right">Price</TableCell>
                                                        <TableCell align="right">Lasted Change</TableCell>
                                                        <TableCell align="right">Last 24h_Change</TableCell>
                                                </TableRow>
                                        </TableHead>
                                                <TableBody>
                                                        {coinData.slice(0,15).map((coin, index) =>(
                                                        <CurrencyList coin={coin} key={index} />
                                                        ))} 
                                                </TableBody>
                                         </Table>
                                         <Button  variant='outlined' 
                                                        style={{ margin: '20px 10px'}} 
                                                        endIcon={<FaAngleDoubleRight />}
                                                        className='apple-btn'
                                                        margin='normal'
                                                        value={!coinData ? 'Show More' : 'No Data'}>
                                        </Button>
                                </TableContainer>
                                
                        </div>
            )
}

export default Currency