import { Box, Typography, Grid, Paper, Link, Button, CardActions, IconButton, Divider} from "@mui/material";
import { styled } from '@mui/material/styles';
import NewUpdate from "./NewUpdate";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Post from "./Post";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
 container: {
   height: '90vh',
   [theme.breakpoints.down("md")]: {
     height: '180vh',
   },
   background: "#BBDEFB",
 },
 underline: {
  height: "0.3rem",
  width: "25rem",
  background: "#38b000",
  marginLeft: "auto",
  marginRight: "auto",
 }
}));
const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: 'center',
 color: theme.palette.text.secondary,
}));

export default function News() {
 const classes = useStyles();
 return (
  <>
   <Box sx={{ padding: 6, flexGrow: 1}} className={classes.container}>
    <Typography variant="h2" color="primary" sx={{textAlign: 'center'}}>New Information</Typography>
    <div className={classes.underline}></div>
    <Grid container spacing={4} sx={{marginTop: 2}}>
     {/* left side */}
     <Grid item xs={8}>
      <Post title="NOVATOR synergistic breakthrough, conquer NOVA OLYMPIC SPORTS" img="https://indochinapost.com/wp-content/uploads/chuyen-phat-nhanh-ho-chi-minh.jpg" time="12/03/2020"/>
      <Grid container spacing={2} sx={{marginTop: 2}}>
       <Grid item xs={6}>
        <Post title="THE NORTH INVESTORS INTERESTED IN NOVALAND's LARGE CITY" img="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1600" time="05/05/2020"/>
       </Grid>
       <Grid item xs={6}>
        <Post title="WELLNESS Real Estate is on the throne, the 'big man' of HEALTH UTILITIES" img="https://citigym.com.vn/storage/uploads/untitled-3-6-1905x834.jpg" time="08/08/2020"/>
       </Grid>
      </Grid>
     </Grid>
     <Grid item xs={4}>
      <Grid container spacing={0}>
       <Grid item xs={12}>
        <Item>
         <Link href="#" underline="hover" variant="h6"> 
          {'MARKET INFORMATION'}
         </Link>
        </Item>
        <Divider />
       </Grid>
       <Grid container spacing={0}>
        <Grid item xs={12}>
         <NewUpdate title="IMPLEMENTATION OF THE BIEN HOA - VUNG TAU Expressway CONSTRUCTION" time="25/05/2020"/>
         <NewUpdate title="NO PROGRESS Fault, COMPLETE THE PHAN THIET–OIL SECONDS LAST THIS YEAR" time="27/07/2020"/>
         <NewUpdate title="QUICKLY PURCHASING THE PLACE, EARLY BOOKING THE AIRPORT CONNECTION" time="25/05/2020"/>
         <CardActions>
          <Button size="small" variant="contained">
           See more
           <IconButton size="small" edge="end" color="inherit" aria-label="open drawer">
            <ArrowRightIcon />
           </IconButton>
          </Button>
         </CardActions>
        </Grid>     
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </Box>
  </>
 )
} 