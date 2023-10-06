import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Material-UI App
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;