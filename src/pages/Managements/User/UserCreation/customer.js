import React from 'react'
import Layout from '../../../../components/layout'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Customer = () => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


 

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div >
      <Layout>

        <div className='createcustomer'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>createcustomer</Typography>
            </AccordionSummary>

            <Box sx={{ flexGrow: 1 }} className="accord">
              <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                  Customer Name
        </InputLabel>
                  <Item>    <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
                </Grid>
                <Grid item xs={4} md={4}>    <InputLabel shrink htmlFor="bootstrap-input" className='input' >
                Country
        </InputLabel>
                  <Item>  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"


                  >

                    <MenuItem  >
                      <Typography>Andhra Pradesh</Typography>
                    </MenuItem>
                    <MenuItem  >
                      <Typography>Bihar</Typography>
                    </MenuItem>

                    <MenuItem  >
                      <Typography>Goa</Typography>
                    </MenuItem>
                    <MenuItem  >
                      <Typography>TamilNadu</Typography>
                    </MenuItem>


                  </TextField></Item>
                </Grid>
                <Grid item xs={4} md={4}>    <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                State
        </InputLabel>
                  <Item>    <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"


                  >

                    <MenuItem  >
                      <Typography>Tiruppur</Typography>
                    </MenuItem>
                    <MenuItem  >
                      <Typography>Covai</Typography>
                    </MenuItem>

                    <MenuItem  >
                      <Typography>Chennai</Typography>
                    </MenuItem>
                    <MenuItem  >
                      <Typography>	Ariyalur</Typography>
                    </MenuItem>


                  </TextField></Item>
                </Grid>
                <Grid item xs={8} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
                City
        </InputLabel>
                  <Item>    <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
                </Grid>
                <Grid item xs={8} md={8}><InputLabel   shrink htmlFor="bootstrap-input" className='input'>  
                Address
        </InputLabel>
                  <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
                </Grid>
                <Grid item xs={8} md={4}>  <InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                Zip Code
        </InputLabel>
                  <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
                </Grid>
                <Grid item xs={8} md={4}><InputLabel shrink htmlFor="bootstrap-input"  className='input'>
                User Name
        </InputLabel>
                  <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
                </Grid>
                <Grid item xs={8} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
                Password
        </InputLabel>
                  <Item>   <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /> </Item>
                </Grid>
                     <Grid item xs={8} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
                     Status
        </InputLabel>
                  <Item>   <TextField
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
              <Stack spacing={2} direction="row">
                <Button variant="outlined"  >Clear</Button>
                <Button variant="contained">Save</Button>

              </Stack> 
           
            </Box>
         
         



          </Accordion>
        
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Create Customer Contacts</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
        First Name
        </InputLabel>
          <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
        </Grid>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input"  className='input'>
        Last Name
        </InputLabel>
          <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
        </Grid>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input"  className='input'>
        Email
        </InputLabel>
          <Item><TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
        </Grid>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
        Mobile No.
        </InputLabel>
          <Item>   <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
        </Grid>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input"  className='input'>
        Alt. Mobile No.
        </InputLabel>
          <Item>   <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small' /></Item>
        </Grid>
        <Grid item xs={4} md={4}><InputLabel shrink htmlFor="bootstrap-input" className='input' >
        Status
        </InputLabel>
          <Item>     <TextField
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
                <Button variant="outlined"  >Clear</Button>
                <Button variant="contained">Save</Button>

              </Stack>

            </AccordionDetails>

            <AccordionDetails>
              <Table>

                <TableHead>
                  <TableRow>

                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Mobile</TableCell>
                    <TableCell align="right">Alt.Mobile </TableCell>
                    <TableCell align="right">Status </TableCell>
                    <TableCell align="right">Is Primary </TableCell>
                    <TableCell align="right">Action </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableCell align="right">Arun</TableCell>
                  <TableCell align="right">Arun@gmail.com</TableCell>
                  <TableCell align="right">1234567890</TableCell>
                  <TableCell align="right">0987654321 </TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">Yes </TableCell>
                  <TableCell align="right"><Button><ModeEditOutlineRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="right">Arun</TableCell>
                  <TableCell align="right">Arun@gmail.com</TableCell>
                  <TableCell align="right">1234567890</TableCell>
                  <TableCell align="right">0987654321 </TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">Yes </TableCell>
                  <TableCell align="right"><Button><ModeEditOutlineRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
              </Table>

            </AccordionDetails>

          </Accordion>
        </div>



      </Layout>
    </div>
  )
}

export default Customer