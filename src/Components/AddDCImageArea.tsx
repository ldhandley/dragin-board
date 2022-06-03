import IconButton from '@mui/material/IconButton';
import DCImageArea from './DCImageArea';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GenerateKey from './GenerateKey';


export default function AddDCImageArea(props: any) {
  const createDCImageArea = () => {
    props.setDcElements(props.dcElements.concat(<DCImageArea key={GenerateKey()} id={GenerateKey()}/>));
  };

  return (
    <IconButton aria-label="add photo" onClick={createDCImageArea} >
      <InsertPhotoIcon />
    </IconButton>
  );
}
