import {Box, Typography, ImageList, ImageListItem, ImageListItemBar, IconButton} from "@mui/material"
import { makeStyles } from '@mui/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const useStyles = makeStyles((theme) => ({
 underline: {
  height: "0.3rem",
  width: "15rem",
  background: "#38b000",
  marginLeft: "auto",
  marginRight: "auto",
 }
}));
const itemData = [
 {
   img: 'https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'SAIGON ROYAL',
 },
 {
   img: 'https://images.pexels.com/photos/8464898/pexels-photo-8464898.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'THE SUN AVENUE',
 },
 {
   img: 'https://images.pexels.com/photos/8783131/pexels-photo-8783131.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'SUNRISE CITY',
 },
 {
   img: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'NOVABEACH CAM RANH RESORT VILLA',
 },
 {
   img: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'NOVAWORLD PHAN THIET',
 },
 {
   img: 'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'NOVAHILLS MUI NE RESORT VILLAS',
 },
 {
   img: 'https://images.pexels.com/photos/3584437/pexels-photo-3584437.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'THE GRAND MANHATTAN',
 },
 {
   img: 'https://images.pexels.com/photos/6501897/pexels-photo-6501897.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'NOVAWORLD HO TRAM',
 },
 {
   img: 'https://images.pexels.com/photos/11742806/pexels-photo-11742806.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'AQUA CITY',
 },
 {
   img: 'https://images.pexels.com/photos/1782151/pexels-photo-1782151.jpeg?auto=compress&cs=tinysrgb&w=1600',
   title: 'ORCHARD GARDEN',
 },
];

export default function Projects() {
 const classes = useStyles();

 return (
  <>
   <Box sx={{ padding: 6, flexGrow: 1}}>
    <Typography variant="h2" color="primary" sx={{textAlign: 'center'}}>Typical Projects</Typography>
    <div className={classes.underline}></div>
    <ImageList sx={{ width: '100%', height: '100%', mt: 8 }} cols={5} rowHeight={450}>
      {itemData.map((item) => (    
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar sx={{padding: 1.5}}
            title={item.title}
            actionIcon={
              <IconButton size="large"
                sx={{ color: 'rgba(255, 255, 255, 0.9)', background: 'rgba(196, 196, 196, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <ArrowRightIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>          
   </Box>
  </>
 )
}