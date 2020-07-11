import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import corona from "../../img/corona.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: window.innerWidth * 0.9,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function CallCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Concerned user"
        subheader="July 11, 2020"
      />
      <CardMedia className={classes.media} image={corona} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Contribute to Covid-19 vaccine
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <AvatarGroup
          max={4}
          spacing="medium"
          classes={{ root: { height: "24px" } }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Praesent ultricies ante a magna posuere venenatis.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at ligula eu odio pellentesque ullamcorper. Mauris bibendum augue
            dignissim placerat tempor. Pellentesque tempus nibh ac mollis
            ornare. Vivamus vel lacus libero. Suspendisse dictum sem a ipsum
            tempus elementum. Integer tempus ipsum non sapien euismod tincidunt.
            Integer finibus, tellus a condimentum scelerisque, ipsum mi maximus
            lorem, tempus congue libero magna tristique lectus.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at ligula eu odio pellentesque ullamcorper. Mauris bibendum augue
            dignissim placerat tempor. Pellentesque tempus nibh ac mollis
            ornare. Vivamus vel lacus libero. Suspendisse dictum sem a ipsum
            tempus elementum. Integer tempus ipsum non sapien euismod tincidunt.
            Integer finibus, tellus a condimentum scelerisque, ipsum mi maximus
            lorem, tempus congue libero magna tristique lectus.
          </Typography>
          <Typography>
            Ipsum mi maximus lorem, tempus congue libero magna tristique lectus.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
