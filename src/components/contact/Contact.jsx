import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContactForm from "./ContactForm";
import contactImg from "../../assets/img/contact.png";
import email from "../../assets/img/email.svg";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import codepen from "../../assets/img/codepen.svg";
import instagram from "../../assets/img/instagram.svg";
//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${contactImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(9, 6, 3, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logos: {
    width: "60px",
    height: "60px",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item sm={false} md={5} className={classes.image} />
      <Grid
        item
        sm={12}
        md={7}
        component={Paper}
        elevation={6}
        style={{ backgroundColor: "#30323d" }}
        square
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{ color: "#fff" }}>
            <MailOutlineRoundedIcon /> Contact
          </Typography>
          <FormHelperText
            id="my-helper-text"
            style={{ textAlign: "center", marginBottom: 10, color: "#eee8e8" }}
          >
            Have a question or want to work together?
          </FormHelperText>
          <ContactForm /> {/*  ContactForm Component */}
        </div>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item style={{ margin: 15 }}>
            <a href="mailto:berkay.3304@gmail.com">
              <img src={email} className={classes.logos} alt="e-mail" />
            </a>
          </Grid>
          <Grid item style={{ margin: 15 }}>
            <a href="https://github.com/berkayalatas">
              <img src={github} className={classes.logos} alt="github" />
            </a>
          </Grid>
          <Grid item style={{ margin: 15 }}>
            <a href="https://www.linkedin.com/in/berkayalatas/">
              <img src={linkedin} className={classes.logos} alt="linkedin" />
            </a>
          </Grid>
          <Grid item style={{ margin: 15 }}>
            <a href="https://codepen.io/berkayalatas">
              <img src={codepen} className={classes.logos} alt="codepen" />
            </a>
          </Grid>
          <Grid item style={{ margin: 15 }}>
            <a href="https://instagram.com/berkayalatas">
              <img src={instagram} className={classes.logos} alt="instagram" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}