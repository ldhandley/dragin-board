import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Draggable from 'react-draggable';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddDCTextArea from './AddDCTextArea';
import AddDCImageArea from './AddDCImageArea';
import DraginTree from './DraginTree';
import Tree from './OldDraginTree';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewDragin(props: any) {
  const [expanded, setExpanded] = useState(false);
  const [dcElements, setDcElements] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const deleteDragin = () => {
    props.setDraginList(prevState => prevState.filter((e: any)=> e.props.id != props.id));
  };

  return (
    <Draggable bounds="parent" handle="strong">
      <Card sx={{ maxWidth: 345, position: 'absolute', maxHeight: 800 }}>
        <strong>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="dragin">
                D
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={deleteDragin}>
                <DeleteOutlineIcon />
              </IconButton>
            }
            title="DraginCard"
            subheader="September 14, 2016"
          />
        </strong>
        <Typography variant="body2" color="text.secondary">
          This is a template of the description area for the Dragin Card! This
          is the description part, which is a little different from the text
          areas below. This part gives a summary of what is on the rest of the
          card...Which is more template stuff.
        </Typography>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            className={'bg'}
            sx={{
              overflow: 'auto',
              scrollbarColor: 'transparent transparent',
              height: 'auto',
              maxHeight: 400,
            }}
          >
            <AddDCTextArea
              dcElements={dcElements}
              setDcElements={setDcElements}
            />
            <AddDCImageArea
              dcElements={dcElements}
              setDcElements={setDcElements}
            />
            {/* {dcElements} */}
            <Tree/>
          </CardContent>
        </Collapse>
      </Card>
    </Draggable>
  );
}
