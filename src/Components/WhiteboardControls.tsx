import NewDragin from './NewDragin';
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function WhiteboardControls(props) {
  const createDragin = () => {
    props.setDraginList(props.draginList.concat(<NewDragin/>));
  };

  return (
    <div className="buttonMenu">
      <IconButton size="small" color="success" onClick={createDragin}>
        <AddCardIcon/>
      </IconButton>
      <IconButton size="small" color="secondary" >
        <ColorLensIcon/>
      </IconButton>
      <IconButton size="small" color="secondary" >
        <AutoFixOffIcon/>
      </IconButton>
    </div>
  );
}
