import React from 'react'
import Avatar from '@mui/material/Avatar';
import {FaHeart} from 'react-icons/fa'
import millify from "millify";
import moment from 'moment'

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';




const CurrencyList = ({coin}) => {
            
          return (             
                      <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                                <TableCell component="th" scope="row">
                                        <FaHeart />                             
                                </TableCell>
                                <TableCell align="left"><Avatar src={coin.image} /></TableCell>
                                <TableCell align="right">{coin.name}</TableCell>                     
                                <TableCell align="right">
                                        {millify(coin.current_price)}  <span id={coin.current_price > coin.low_24h ? 'error' : 'success' }>
                                        <Badge color="secondary" badgeContent={millify(coin.current_price - coin.low_24h)}>
                                                
                                        </Badge>
                                       
                                        </span>
                                </TableCell>
                                <TableCell align="right">{moment(coin.last_updated).startOf('ss').fromNow()}</TableCell>
                                <TableCell align="right">{millify(coin.low_24h)}</TableCell>
                      </TableRow>             
          )
}

export default CurrencyList