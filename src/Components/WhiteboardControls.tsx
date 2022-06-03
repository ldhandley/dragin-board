import NewDragin from './NewDragin';
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import AddCardIcon from '@mui/icons-material/AddCard';
import GenerateKey from './GenerateKey';
import Color from './MarkerColor';
import { useState } from "react";



export default function WhiteboardControls(props: any) {
  const [displayed, setDisplayed] = useState(false);
  const createDragin = () => {
    props.setDraginList(props.draginList.concat(<NewDragin key={GenerateKey()} id={GenerateKey()} draginList={props.draginList} setDraginList={props.setDraginList}/>));
  };
  return (
    <div className="buttonMenu">
      <IconButton size="small" color="success" onClick={createDragin} >
        <AddCardIcon/>
      </IconButton>
      <IconButton size="small" color="secondary" onClick={()=>setDisplayed(true)}>
        <ColorLensIcon/>
        <Color displayed={displayed} setDisplayed={setDisplayed}/>
      </IconButton>
      <IconButton size="small" color="secondary" >
        <AutoFixOffIcon/>
      </IconButton>
    </div>
  );
}
