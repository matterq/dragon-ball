import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';

const Aliens = () => {
  const [aliens, setAliens] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchAliens = async () => {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters?limit=50');
      
        if (response.data && Array.isArray(response.data.items)) {
          const filteredAliens = response.data.items.filter(character => character.race && character.race.toLowerCase() !== 'human'); // Filtrando aliens
          // Muestra los personajes filtrados
          setAliens(filteredAliens);
        } else {
          console.error('No hay resultados en la respuesta', response.data);
        }
      } catch (error) {
        console.error('Error fetching alien characters:', error);
      } finally {
        setLoading(false); // Cambiar a false al finalizar la carga
      }
    };

    fetchAliens();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center">Cargando no humanos...</Typography>
        <CircularProgress />
      </Container>
    ); // Mostrar un indicador de carga
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        {aliens.map(alien => (
          <Grid item xs={12} sm={6} md={4} key={alien.id}>
            <CharacterCard character={alien} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Aliens;

