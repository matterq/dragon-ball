/*PAGINA DE INICIO*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid, Container, Typography, Button } from '@mui/material';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Estado para controlar la visibilidad de los personajes

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters?limit=50');
        console.log(response.data); // Muestra toda la respuesta de la API
        
        // Si la respuesta tiene la propiedad items, también puedes ver solo eso
        console.log(response.data.items); // Muestra solo los items
        setCharacters(response.data.items);
      } catch (err) {
        console.error(err);
        setError('Failed to load characters.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h5">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      
        <>
          <Typography 
            variant="h4" 
            style={{ 
              fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', 
              textAlign: 'center', 
              marginBottom: '30px' 
            }}
          >
          </Typography>
          <Grid container spacing={2}>
            {characters.map(character => (
              <Grid item xs={12} sm={6} md={4} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
        </>
      
    </Container>
  );
}

export default Home;
