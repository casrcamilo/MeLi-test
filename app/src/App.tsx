import React from 'react';
import Container from '@mui/material/Container';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        {/* Your app content goes here */}
        <h1>Welcome to My Material-UI App</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
