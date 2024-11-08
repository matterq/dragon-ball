import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#090f13' }}> {/* Fondo verde */}
      <Toolbar>
      <Typography 
          variant="h6" 
          style={{ 
            flexGrow: 1, 
            fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', // Cambiar la fuente aquí
            color: '#f2eab7' // Color negro
          }}
        >
          dragon ball
        </Typography>
        <Button 
          sx={{ color: '#f2eab7', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/"
        >
          Home
        </Button>
        <Button 
          sx={{ color: '#f2eab7', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/aliens"
        >
          nohumans
        </Button>
        <Button 
          sx={{ color: '#f2eab7', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/humans"
        >
          Humans
        </Button>
        <Button 
          sx={{ color: '#f2eab7', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/about"
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



