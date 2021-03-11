
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Animation from "./Animation";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { motion } from "framer-motion";
import logo from '../../assets/img/logo.png'
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  animation: {
    zIndex: 100,
    position: "fixed",
    width: "100vw",
    height: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    marginLeft: 5,
  },
  text: {
    color: "white",
    fontFamily: "Poppins",
    letterSpacing: 2,
  },
  button: {
    background: "#16b4b4",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    left: 40,
    top: 20,
    fontFamily: "Poppins",
    fontSize: 18,
    textDecoration: "none",
    "&:hover": {
      color: "#16b4b4",
      background: "#0f0e0e",
      transition: "0.3s",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [isDown, setIsDown] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <Animation />
      </div>
      <Grid container>
        <Grid item>
          <img src={logo} 
            style={{width:65 , height:65, marginLeft:20, marginTop:20}}
          alt="LOGO"/>
        </Grid>
      </Grid>
      <Grid container className={classes.main}>
        <Grid item>
          <Typography variant="h2" id="hello" className={classes.text} gutterBottom>
            HELLO !
          </Typography>
          <Typography variant="h3" className={classes.text} gutterBottom>
            I'm <span style={{ color: "#17b6b6" }}> Berkay Alatas </span>
          </Typography>
          <Typography variant="h3" className={classes.text} gutterBottom>
            Web Developer
          </Typography>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              size="large"
              href="#about"
              className={classes.button}
              onMouseEnter={() => setIsDown(true)}
              onMouseLeave={() => setIsDown(false)}
            >
              About Me{" "}
              {isDown ? (
                <ArrowDownwardIcon fontSize="large" />
              ) : (
                <ArrowForwardIcon fontSize="large" />
              )}
            </Button>
          </motion.div>
          
        </Grid>
      </Grid>
    </div>
  );
}