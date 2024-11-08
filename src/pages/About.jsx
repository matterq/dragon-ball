import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Box display="flex" justifyContent="center">
        <Card>
          <CardMedia
            sx={{
              height: { xs: 200, md: 300 }, // Altura ajustable para diferentes tamaños de pantalla
              width: '100%', // Ancho completo de la tarjeta
              objectFit: 'cover', // Ajusta la imagen para cubrir el área del contenedor
            }}
            image="https://www.deanime.info/wp-content/uploads/2018/10/personajes-de-dragon-ball-super-broly-pelicula-2018-768x412.png" // Puedes cambiar esta URL por una imagen relevante
            alt="Rick and Morty"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
               DRAGON BALL
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
              "Dragon Ball, creado por Akira Toriyama, se publicó por
              primera vez en Weekly Shōnen Jump el 20 de noviembre de 1984 y 
              fue adaptado a una serie de anime que 
              comenzó a emitirse el 26 de febrero de 1986. La historia sigue a Son Goku en su 
              búsqueda de las Esferas del Dragón y ha vendido más de 260 millones de copias de su manga, 
              convirtiéndose en uno de los más 
              exitosos de la historia. Aunque ha enfrentado críticas por la violencia y 
              la sexualización de personajes, su influencia en la cultura pop es innegable, 
              dejando una huella duradera en el mundo del anime y manga.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;

