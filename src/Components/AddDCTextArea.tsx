import DCTextArea from './DCTextArea';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';

export default function AddDCTextArea(props) {
  const createDCTextArea = () => {
    props.setDcElements(props.dcElements.concat(<DCTextArea />));
  };

  return (
    <IconButton aria-label="add text area">
      <ArticleIcon onClick={createDCTextArea} />
    </IconButton>
  );
}
