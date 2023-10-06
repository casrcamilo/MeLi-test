import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './containers/Home';
import ListItems from './containers/ListItems';
import Item from './containers/Item';
import NotFound from './containers/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Box 
        component="section" 
        sx={{ 
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/items" element={<ListItems />}/>
            <Route path="/items/:id" element={<Item />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </Router>
  ); 
}

export default App;
