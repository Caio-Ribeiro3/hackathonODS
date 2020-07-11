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
    height: "100vh",
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "80vw",
    margin: 10,
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
      <Typography variant="h4">Sign Up</Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleForm}
      >
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
        />
        <Button type="submit" onClick={handleLogin} className={classes.button}>
          Sign Up
        </Button>
        <Typography style={{ margin: 10 }}>Já tem uma conta? Login</Typography>
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
