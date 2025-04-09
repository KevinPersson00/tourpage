import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Theme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  height: '80vh',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1589963463295-81f6ae08fc5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
}));

const GalleryImage = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    '& img': {
      filter: 'brightness(1.1)',
    },
  },
  '& img': {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    transition: 'filter 0.3s ease-in-out',
  },
}));

const galleryImages = [
  '/tour1.jpg',
  '/tour2.jpg',
  '/tour3.jpg',
  '/tour4.jpg',
  '/tour5.jpg',
  '/tour6.jpg',
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Explore Malta with Stanley
            </Typography>
            <Typography variant="h5" paragraph>
              Your local guide to Malta's hidden gems and fascinating stories
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Meet Stanley
          </Typography>
          <Typography variant="body1" paragraph>
            Stanley Cassar Darien is a passionate Maltese tour guide with 20+ years of experience. 
            From historic landmarks to hidden gems, Stanley brings Malta's rich past to life through 
            fun, private walking tours.
          </Typography>
        </Box>
      </Container>

      <Box id="gallery" sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Moments from My Tours
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {galleryImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GalleryImage>
                    <img src={image} alt={`Tour moment ${index + 1}`} />
                  </GalleryImage>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 