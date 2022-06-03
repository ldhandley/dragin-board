import DCTextArea from './DCTextArea';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import GenerateKey from './GenerateKey';


export default function AddDCTextArea(props: any) {
  const createDCTextArea = () => {
    props.setDcElements(props.dcElements.concat(<DCTextArea key={GenerateKey()} id={GenerateKey()}/>));
  };

  return (
    <IconButton aria-label="add text area" onClick={createDCTextArea}>
      <ArticleIcon />
    </IconButton>
  );
}
