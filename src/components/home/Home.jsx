import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import CallCard from "./CallCard";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
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
  CircularProgress: {
    margin: 10,
  },
});

export default function Login() {
  const classes = useStyles();
  const [feed, setFeed] = React.useState([1, 2, 3]);
  const [isFetchingFeedData, setIsFetchingFeedData] = React.useState(false);
  const onBottom = () => {
    setIsFetchingFeedData(true);
    setTimeout(() => {
      setFeed([...feed, ...[1, 2, 3]]);
      setIsFetchingFeedData(false);
    }, 2000);
  };
  useBottomScrollListener(onBottom);
  return (
    <div className={classes.root}>
      <Header />
      {feed.map(() => (
        <CallCard />
      ))}
      {isFetchingFeedData ? (
        <CircularProgress className={classes.CircularProgress} />
      ) : (
        false
      )}
    </div>
  );
}
