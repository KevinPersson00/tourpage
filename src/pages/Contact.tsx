import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Theme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  minHeight: 'calc(100vh - 200px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to bottom, #fdf6ee, #fefefe)',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    paddingTop: theme.spacing(8),
  },
}));

const ContactCard = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(8),
  textAlign: 'center',
  maxWidth: 600,
  width: '100%',
  backgroundColor: '#FAF9F6',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  borderRadius: '1rem',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  margin: '0 auto',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ContactInfo = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(4, 0),
  transition: 'all 0.2s ease-in-out',
  '& svg': {
    marginRight: theme.spacing(2),
    color: '#1A3A5F',
    transition: 'color 0.2s ease-in-out',
  },
  '&:hover': {
    '& svg, & .MuiTypography-root': {
      color: '#F4A261',
    },
  },
}));

const LocationInfo = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 4),
  '& svg': {
    marginRight: theme.spacing(1),
    color: '#1A3A5F',
  },
}));

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
        <ContactCard elevation={3}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              color: '#1A3A5F', 
              fontWeight: 700,
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 1, 
              color: '#1A3A5F',
              fontWeight: 600,
            }}
          >
            Stanley Cassar Darien
          </Typography>

          <LocationInfo>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body1" sx={{ color: '#1A3A5F' }}>
              Based in Malta
            </Typography>
          </LocationInfo>

          <ContactInfo>
            <PhoneIcon fontSize="large" />
            <Typography variant="h5" sx={{ color: '#1A3A5F' }}>
              +356 9933 2288
            </Typography>
          </ContactInfo>

          <ContactInfo>
            <EmailIcon fontSize="large" />
            <Typography variant="h5" sx={{ color: '#1A3A5F' }}>
              Stanmalta@hotmail.co.uk
            </Typography>
          </ContactInfo>
        </ContactCard>
      </Container>
    </ContactContainer>
  );
};

export default Contact; 