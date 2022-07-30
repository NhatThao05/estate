import { Card, CardActionArea, CardContent, Typography, Link, IconButton, MenuItem, Divider } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function NewUpdate ({ title, time }) {
 return (
   <Card >
     <CardActionArea>
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
     <Divider />
   </Card>
 );
};