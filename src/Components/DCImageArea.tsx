import CardMedia from '@mui/material/CardMedia';
import Draggable from 'react-draggable';


export default function DCImageArea(props: any) {
  return (
    <Draggable bounds="parent">
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        alt="Paella dish"
      />
    </Draggable>
  );
}
