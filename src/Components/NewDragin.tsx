import * as React from 'react';
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

export default function NewDragin() {
  const [expanded, setExpanded] = useState(false);
  const [dcElements, setDcElements] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Draggable bounds="parent">
      <Card sx={{ maxWidth: 345, position: 'absolute', maxHeight: 800}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="dragin">
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <DeleteOutlineIcon />
            </IconButton>
          }
          title="DraginCard"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a template of the description area for the Dragin Card! This is the description
            part, which is a little different from the text areas below. This
            part gives a summary of what is on the rest of the card...Which is
            more template stuff.
          </Typography>
        </CardContent>
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
          <CardContent className={"bg"} sx={{overflow: "auto", scrollbarColor: 'transparent transparent', height: 400}}>
            <AddDCTextArea
              dcElements={dcElements}
              setDcElements={setDcElements}
            />
            <AddDCImageArea
              dcElements={dcElements}
              setDcElements={setDcElements}
            />
            {dcElements}
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Draggable>
  );
}
