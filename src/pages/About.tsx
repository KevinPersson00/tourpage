import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const About: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Stanley
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar
              alt="Stanley Cassar Darien"
              src="/stanley.jpg"
              sx={{ 
                width: 300, 
                height: 300,
                border: '3px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledPaper elevation={3}>
            <Typography variant="body1" paragraph>
              Born and bred in Malta, Stanley believes the best guides are knowledgeable, passionate, and most importantly, have a great sense of humour.
            </Typography>
            <Typography variant="body1" paragraph>
              Over the past 20 years, he has assisted with Malta visits for embassies, government bodies, VIPs, TV crews and heads of state.
            </Typography>
            <Typography variant="body1" paragraph>
              Stanley's private walking tours explore hidden places which many guide books simply just don't cover. With a deep appreciation for history and an HND in Hotel Management, Stanley shares his extensive knowledge on every tour he guides.
            </Typography>
            <Typography variant="body1" paragraph>
              If you are looking to dive into the past as you explore Malta's most famous sites, Stanley will be the perfect fit.
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>

      <Box sx={{ my: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Achievements
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              20+ Years Experience
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Guiding tours with expertise and passion.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              HND in Hotel Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Professional training in hospitality and tourism.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              VIP Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Trusted by embassies and government bodies.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 