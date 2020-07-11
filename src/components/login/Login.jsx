import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography, TextField } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  fetchingBackground: {
    background: "rgba(0,0,0,0.5)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [
    isFetchingLoginInformation,
    setIsFetchingLoginInformation,
  ] = React.useState(false);

  const handleLogin = (event) => {
    setIsFetchingLoginInformation(true);
    setTimeout(() => {
      setIsFetchingLoginInformation(false);
    }, 2000);
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4">Login</Typography>
      <Typography>Login como doador</Typography>

      <Button className={classes.button} onClick={handleLogin}>
        Hook
      </Button>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleForm}
      >
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button type="submit">Log In</Button>
      </form>
      {isFetchingLoginInformation ? (
        <div className={classes.fetchingBackground}>
          <CircularProgress />
        </div>
      ) : (
        false
      )}
    </div>
  );
}
