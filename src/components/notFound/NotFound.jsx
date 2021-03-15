import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import error from "../../assets/img/error.svg";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 3),
    background: "#0dc4c4",
    borderRadius: 10,
    padding: "10 10",
    color: "#121114",
    marginTop: 10,
    fontFamily: "Poppins",
    fontSize: 18,
    textDecoration: "none",
    "&:hover": {
      color: "#0dc4c4",
      background: "#414343",
      transition: "0.3s",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography
            variant="h3"
            gutterBottom
            style={{ color: "#fff", margin: 20 }}
          >
            PAGE NOT FOUND
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={error}
            alt="Page is NOT FOUND"
            style={{ maxWidth: "80%",marginLeft:40}}
          />
        </Grid>
        <Grid item>
          <motion.div
            className="animatable"
            whileHover={{
              scale: 1.0,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<HomeIcon />}
                className={classes.button}
                size="large"
                variant="contained"
              >
                GO HOME
              </Button>
            </Link>
          </motion.div>
          ;
        </Grid>
      </Grid>
    </div>
  );
};
export default NotFound;
