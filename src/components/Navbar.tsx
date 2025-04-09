import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Theme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#FAF9F6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  color: '#1A3A5F',
}));

const NavButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(0, 1),
  color: '#1A3A5F',
  '&:hover': {
    backgroundColor: 'rgba(244, 162, 97, 0.1)',
  },
}));

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textDecoration: 'none',
  color: '#1A3A5F',
  fontWeight: 700,
}) as typeof Typography;

const Navbar: React.FC = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <StyledTypography
          variant="h6"
          component={RouterLink}
          to="/" style={{ textDecoration: 'none'}}
        >
          BornAndBred Malta
        </StyledTypography>
        <Box>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <NavButton>Home</NavButton>
          </RouterLink>
          <NavButton onClick={scrollToGallery}>Gallery</NavButton>
          <RouterLink to="/about" style={{ textDecoration: 'none' }}>
            <NavButton>About</NavButton>
          </RouterLink>
          <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
            <NavButton>Contact</NavButton>
          </RouterLink>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 