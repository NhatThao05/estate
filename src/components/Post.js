import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Link, IconButton, MenuItem } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
 media: {
   height: 250,
   [theme.breakpoints.down("sm")]: {
     height: 150,
   },
 },
}));

export default function Post ({ img, title, time }) {
 const classes = useStyles();
 return (
   <Card >
     <CardActionArea>
       <CardMedia image={img} title="My Post" className={classes.media}/>
       <CardContent>    
        {/*  */}
        <MenuItem>
         <IconButton size="small" edge="start" color="success">
          <AccessTimeIcon />
         </IconButton>
         <p>{time}</p>
        </MenuItem>
        {/*  */}
        <Link underline="hover" color="inherit" href="#" variant="h5">{title}</Link>
        <IconButton size="large" edge="end" color="success" aria-label="open drawer">
          <ArrowRightIcon />
        </IconButton>
         <Typography variant="body2">
          Lorem ipsum dolor sit amet, augue nemore integre quo id, in elit mucius deseruisse sit. 
          Usu nihil prodesset voluptaria no, movet euripidis eu pro, ne pri atomorum adipiscing. 
          Eum dolore voluptatum ut. Duo brute assueverit ex, affert quodsi noluisse id vim. An latine prompta definitiones eos. 
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" variant="contained">Read More</Button>
       <Button size="small" variant="contained">Share</Button>
     </CardActions>
   </Card>
 );
};