import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card>
      <div style={{ 
        width: '100%', 
        height: '300px',  // Altura fija para el contenedor
        display: 'flex',  // Flexbox para centrar la imagen
        justifyContent: 'center',  // Centrar horizontalmente
        alignItems: 'center',  // Centrar verticalmente
        overflow: 'hidden',  // Oculta cualquier parte de la imagen que sobresalga
        position: 'relative', // Para posicionar la imagen
      }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          
          sx={{
            width: 'auto', // Permitir que el ancho sea automático
            height: '100%', // Fijar la altura al 100% del contenedor
            maxWidth: '100%', // Evitar que la imagen exceda el ancho del contenedor
            objectFit: 'contain', // Ajustar la imagen dentro del contenedor sin recortar
            transition: 'transform 0.3s ease', // Transición suave para el efecto hover
            position: 'absolute', // Para que la imagen sobresalga
            top: '50%', // Centrar verticalmente
            left: '50%', // Centrar horizontalmente
            transform: 'translate(-50%, -50%) scale(1)', // Centrado con escala inicial
          }} 
          className="character-image" // Agregamos una clase para aplicar el efecto hover
        />
      </div>
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Typography variant="h5">ki: {character.ki}</Typography>
        <Typography variant="h5">Maxki: {character.maxKi}</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#171f25', color: '#f2eab7', '&:hover': { backgroundColor: '#752e2b' } }} // Estilos para el botón
          component={Link}
          to={`/characters/${character.id}`}
          style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} // Estilo adicional
        >
          DETALLE
        </Button>
      </CardContent>

      {/* Estilos globales para el hover */}
      <style jsx>{`
        .character-image:hover {
          transform: translate(-50%, -50%) scale(1.1); // Escalar imagen al pasar el mouse
        }
      `}</style>
    </Card>
  );
}

export default CharacterCard;



