import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import AboutCards from "./AboutCards";
import about from "../../assets/img/about.svg";
import SkillCards from './SkillCards'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#3e4258"
  },
  text: {
    fontFamily: "Poppins",
    color: "#eae3e3",
    fontSize: 18,
    fontWeight: 500,
    margin: 10,
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
            style={{ color: "#fff", margin: 10 }}
          >
            <PersonOutlineTwoToneIcon
              style={{ color: "#16b4b4" }}
              fontSize="large"
            />{" "}
            About Me
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ justifyContent: "center", padding: 25 }}>
        <Grid item lg={6} md={6} sm={12} xs={12} style={{padding:10}}>
          {/* SVG AND ABOUT CONTENT */}
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item>
              <img
                src={about}
                alt="About Img"
                style={{ width: "320px", height: "250" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" gutterBottom className={classes.text}>
                I'm Berkay! I'm studying computer engineering in Turkey, I enjoy
                developing web applications and design. I like working with
                JavaScript and Python in general. Additionally, I have an
                eagerness to learn and expand my knowledge and skills all the
                time. I believe that the way to move forward is by learning so I
                am trying to improve my current skills and learn new
                technologies.
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item>
                <SkillCards />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <AboutCards />
        </Grid>
      </Grid>
    </div>
  );
}
