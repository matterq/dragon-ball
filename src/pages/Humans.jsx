import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';

const Humans = () => {
  const [humans, setHumans] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchHumans = async () => {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters?limit=50');
       
        if (response.data && Array.isArray(response.data.items)) {
         
          const filteredHumans = response.data.items.filter(character => character.race && character.race.toLowerCase() === 'human');
          setHumans(filteredHumans);
        } else {
          console.error('No hay resultados en la respuesta', response.data);
        }
      } catch (error) {
        console.error('Error fetching human characters:', error);
      } finally {
        setLoading(false); // Cambiar a false al finalizar la carga
      }
    };

    fetchHumans();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center">Cargando humanos...</Typography>
        <CircularProgress />
      </Container>
    ); // Mostrar un indicador de carga
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        {humans.map(human => (
          <Grid item xs={12} sm={6} md={4} key={human.id}>
            <CharacterCard character={human} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Humans;
