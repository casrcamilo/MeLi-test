import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MercadolibreLogo from "../../assets/images/ml-logo.png";
import { Stack } from "@mui/material";
import theme from "../../theme";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm" sx={{ padding: theme.spacing(3) }}>
        <Stack spacing={2}>
          <Typography variant="body1" align="center">
            Website developed by Camilo Sosa - Frontend Developer
          </Typography>
          <Typography variant="body1" align="center">
            All assets and information are the property of Mercado Libre.
            <img src={MercadolibreLogo} alt="mercado-libre-logo" />
          </Typography>
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} MeLi-test App v1.0
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
