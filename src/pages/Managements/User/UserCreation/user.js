import React from 'react'
import Layout from '../../../../components/layout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CardContent } from '@mui/material'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';

const User=()=> {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Layout>
      <Box className='map2'>
        <Link to="/manageusers">
<Button className='button' variant="contained" size='small'>Back</Button>  </Link>
<Card>
<CardContent>
<Box sx={{ flexGrow: 1 }} className="accord">
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                First Name
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>   <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Last Name
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>
                
                
                
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Mobile Number
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>   <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Alternate Mobile No
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>
                
                
                
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Email
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>   <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                User Name
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>
                
                
                
                </Grid>       <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Password
        </InputLabel>
                  <Item>  
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
</Item>
                </Grid>   <Grid item xs={6} md={6}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Status
        </InputLabel>
                  <Item>  
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"


                  >

                    <MenuItem  >
                      <Typography>Acctive</Typography>
                    </MenuItem>
                    <MenuItem  >
                      <Typography>In Acctive</Typography>
                    </MenuItem>



                  </TextField>    
</Item>
                </Grid>
                
                
                
                </Grid>
                </Box>






 
        <Stack spacing={2} direction="row">
        <Button variant="outlined" size='small'>Clear</Button>  
      <Button variant="contained">Save</Button>
     
    </Stack>
        </CardContent>


</Card>

</Box>

      </Layout>
      </div>
  )
}

export default User