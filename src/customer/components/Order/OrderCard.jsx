import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className="flex cursor-pointer">
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.unsplash.com/photo-1568252748074-f9c8d964e834?auto=format&fit=crop&q=80&w=1904&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="ml-5">
                    <p>Men Slim Mid Rise Black Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>$1455</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div><p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'></AdjustIcon>
                <span>
                    Delivered on March 03
                </span>    
            </p>
            <p className="text-xs">
                Your Item Has Been Delivered
            </p>
            </div>}
            {false && <p>
                <span>
                    Expected Delivery On Mar 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
