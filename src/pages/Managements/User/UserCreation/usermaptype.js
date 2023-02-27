import { CardContent } from '@mui/material'
import React from 'react'
import Layout from '../../../../components/layout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
const Usermaptype=()=> {
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))


  const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

const handleChange=()=>{
  console.log(doubled);
}
  return (
    <div>
<Layout>

<Box className='maptype'>
  <Link to='/usertypemapping'><Button className='button' variant="contained" size='small'>Back</Button>  </Link>

<Card className='gg'>
<CardContent >

<Grid container spacing={1} className="accord">
                <Grid item xs={4} md={8}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Select User
        </InputLabel>
                  <Item>  
<TextField className='map'
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
           
            
           
        </TextField></Item>
                </Grid>
                <Grid item xs={4} md={8}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                User Type
        </InputLabel>
                  <Item>  
<TextField className='map'
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
           
            
           
        </TextField></Item>
                </Grid>
        <CardContent>
        </CardContent>
         
        <Stack spacing={2} direction="row">
        <Button variant="outlined" size='small'>Clear</Button>  
      <Button variant="contained" onClick={handleChange}>Save</Button>
     
    </Stack></Grid>
        </CardContent>


</Card>

</Box>


</Layout>

    </div>
  )
}

export default Usermaptype