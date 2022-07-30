import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, MobileStepper, Paper, Typography, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {styled} from "@mui/material/styles";

export const MarketingContainer = styled(Box)(({theme}) => ({
 marginTop: '40px',
 marginBottom: '40px',
 display: 'flex',
 justifyContent: 'center',
 overflow: "hidden"
}))

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Core Value Efficiency - Integrity - Professionalism',
    imgPath: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/2022/gma2022-duantieubieu-1600x1111.jpg',
  },
  {
    label: 'The Leading Real Estate developer in Vietnam',
    imgPath: 'https://congtycityland.com.vn/wp-content/uploads/2018/05/can-h%E1%BB%99-cityland.jpg',

  },
  {
    label: 'Mission Developing community & Building happiness',
    imgPath: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
  },
  {
    label: 'Hospital, Industrial, Residental estate',
    imgPath: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/beach.jpg',
  },
];

export default function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MarketingContainer>
    <Box sx={{ maxWidth: '100%', flexGrow: 1, justifyContent: "center", alignItems: 'center', position: 'relative' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{position: "absolute"}}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />           
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{position: 'absolute', bottom: 120, left: 40}}>
       <Paper
        //  className={classes.paper}
         square
         elevation={0}
         sx={{ 
          padding: 6, 
          justifyContent: "center", 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          border: '1px solid rgba(0, 0, 0, 0.4)',
          borderLeft: '10px solid #1E88E5', 
          borderRadius: 8}}
        >
         <Typography variant='h5' sx={{fontWeight: 'bolder', color: '#fff'}}>{images[activeStep].label}</Typography>
       </Paper>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </MarketingContainer>
  );
}

