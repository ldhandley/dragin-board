import IconButton from '@mui/material/IconButton';
import DCImageArea from './DCImageArea';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function AddDCImageArea(props) {
  const createDCImageArea = () => {
    props.setDcElements(props.dcElements.concat(<DCImageArea />));
  };

  return (
    <IconButton aria-label="add photo">
      <InsertPhotoIcon onClick={createDCImageArea} />
    </IconButton>
  );
}
