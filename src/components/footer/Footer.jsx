import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      style={{ color: "#fff", textAlign: "center", fontFamily: "Poppins" }}
    >
      {"Copyright © "}
      <Link
        href="https://www.linkedin.com/in/berkayalatas/"
        style={{ color: "#fff", textAlign: "center", fontFamily: "Poppins" }}
      >
        Berkay Alatas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#171b1a",
    fontFamily: "Poppins",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
