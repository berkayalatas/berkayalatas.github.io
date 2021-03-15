import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCards from "./ProjectCards";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#414975",
  },
}));

const Portfolio = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
            style={{ color: "#fff", margin: 10 }}
          >
            <WorkTwoToneIcon style={{ color: "#16b4b4" }} fontSize="large" />{" "}
            Portfolio
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ justifyContent: "center"}}>
        <Grid item style={{ margin:10}}>
          <ProjectCards /> {/* Cards */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
