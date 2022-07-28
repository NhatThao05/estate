import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, MenuItem, Menu, List, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      '&:focus': {
       width: '60ch'
      }
    },
  },
}));

export const MyList = styled(List)(({type}) => ({
 display: type === 'row' ? 'flex' : 'block',
 flexGrow: 2,
 justifyContent: 'space-between',
 alignItems: 'center',
 fontWeight: "bold"
}))

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
   setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
       <IconButton size="small" edge="end" color="success" sx={{marginRight: 1}}>
        <CallIcon />
       </IconButton>
       <p>Call</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
       <IconButton size="small" edge="end" color="success" sx={{marginRight: 1}}>
        <EmailIcon />
       </IconButton>
       <p>Email</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="success">
         <HomeOutlinedIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Home</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Introduction</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Projects</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Investor Relations</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">News</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Subtainability</Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" edge="end" color="success" aria-label="open drawer">
         <ArrowRightIcon />
        </IconButton>
        <Link underline="hover" color="inherit" href="#">Careers</Link>
      </MenuItem>
      <MenuItem>
       <IconButton
          size="large"
          edge="start"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="success"
        >
          <MoreVertIcon />
        </IconButton>
        <p>Contact US</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bolder' }}
          >
            CITY LAND
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>   
            <MyList type="row">
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Home</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Introduction</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Projects</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Investor relations</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>News</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Subtainability</Link>
              <Link underline="hover" color="inherit" href="#" sx={{marginRight: 2}}>Careers</Link>
              <Link underline="hover" color="inherit" href="#">Contact US</Link>
            </MyList>    
            {/* <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
             <MenuIcon />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
