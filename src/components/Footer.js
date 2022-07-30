import {Box, Grid, Typography, Button, TextField, MenuItem, Stack, Link, IconButton} from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function Footer() {
 return (
  <>
   <Box style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/003/003/167/original/abstract-triangle-white-and-gray-color-gradient-background-free-vector.jpg)', color: "#E5E5E5", padding: 10}}>
    <Grid container justifyContent="center">
     <Grid item md={8} lg={2} sx={{marginTop: 4}}>
      <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="primary">Sign up for the newletter</Typography>
      <Typography variant="h6" color="primary">Connect with us to follow the latest information.</Typography>
      <Grid container spacing={2}>
       <Grid item xs={6} md={6}>
        <Stack>
         <TextField id="outlined-basic" label="Email address" variant="outlined" />
        </Stack>
       </Grid>
       <Grid item xs={2} md={6}>
        <Button variant="contained" sx={{padding: 2, color: "success"}}>Register</Button>
       </Grid>
      </Grid>
     </Grid>
     {/*  */}
     <Grid item md={8} lg={2} sx={{marginTop: 4}}>
      <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="primary">Company Brochure</Typography>
      <Typography variant="h6" color="primary">Download Novaland's latest Brochure <br/>to better understand us.</Typography>
      <MenuItem sx={{ml: -2}}>  
       <Link underline="hover" color="#38b000" href="#" variant="h6">Download Brochure</Link>
       <IconButton size="small" edge="end" color="success" aria-label="open drawer">
        <ArrowRightIcon />
       </IconButton>
      </MenuItem>
     </Grid>
     {/*  */}
     <Grid item md={8} lg={2} sx={{marginTop: 4}}>
      <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="primary">
       Customer Service Center: 
       <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="#38b000">1900 900 399</Typography>
      </Typography>
      <Typography variant="h6" color="primary" sx={{fontWeight: 'bolder'}}>
       Email:
       <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="#38b000">Customer@Novaland.com</Typography>
      </Typography>
     </Grid>
     {/*  */}
     <Grid item md={8} lg={2} sx={{marginTop: 4}}>   
      <MenuItem sx={{ml: -2}}>  
       <Link underline="hover" color="primary" href="#" variant="h5" sx={{fontWeight: 'bolder'}}>Click to Survey standard:
        <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="#38b000">
         Support@Novaland.com
         <IconButton size="small" edge="end" color="success" aria-label="open drawer">
          <ArrowRightIcon />
         </IconButton>
         </Typography>
       </Link>
      </MenuItem>
      <Typography variant="h5" color="primary" sx={{fontWeight: 'bolder'}}>
       Become Novaland's member:
       <Typography variant="h5" sx={{fontWeight: 'bolder'}} color="#38b000">Member@Novaland.com</Typography>
      </Typography>
     </Grid>
    </Grid>
   </Box>
  </>
 )
}