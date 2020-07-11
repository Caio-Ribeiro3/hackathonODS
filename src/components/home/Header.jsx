import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Filters from "./Filters";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  inputProps: {
    border: "solid 1px #eee",
    borderRadius: 50,
    background: "red",
  },
}));

export default function Header() {
  const [spacing, setSpacing] = React.useState(2);
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={8}>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Search"
          inputProps={classes.inputProps}
        />
      </Grid>
      <Grid item xs={2}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => setExpanded(!expanded)}
        >
          <FilterListIcon />
        </IconButton>
      </Grid>
      <Filters expanded={expanded} />
    </Grid>
  );
}
