import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import CallCard from "./CallCard";

const useStyles = makeStyles({
  root: {},
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      {[1, 2, 3].map(() => (
        <CallCard />
      ))}
    </div>
  );
}