import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import aboutData from "../../data/aboutData";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    margin: 20,
    backgroundColor: "#94ada7",
  },
  svg: {
    width: 100,
    height: 100,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    height: 310,
  },
  card: {
    display: "flex",
    flexDirection: "colunmn",
    justifyContent: "center",
    alignItems: "center",
  },
});

const AboutCards = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container style={{ justifyContent: "center" }}>
        {aboutData.map((card, index) => (
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className={classes.root} key={index}>
                <CardActionArea className={classes.text}>
                  <Grid container className={classes.card}>
                    <Grid item>
                      <img
                        src={card.svg}
                        alt="Card SVG"
                        className={classes.svg}
                      />
                    </Grid>
                    <Grid item>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                          <Divider variant="middle" component="hr" />
                        </Typography>

                        <Typography variant="body2" component="p">
                          {card.content}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default AboutCards;
