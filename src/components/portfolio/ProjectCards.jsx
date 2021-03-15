import React from "react";
import "./portfolio.css";
import Typography from "@material-ui/core/Typography";
import portfolioData from "../../data/portfolioData";
import ViewCarouselTwoToneIcon from "@material-ui/icons/ViewCarouselTwoTone";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
 
const ProjectCards = () => {
 
  return (
    <div>
      <main className="page-content">
        {portfolioData.map((project, index) => (
          <motion.div
            className="card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "60%",
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="content">
              <Typography
                component="h3"
                variant="h4"
                style={{
                  backgroundColor: "black",
                  padding: 5,
                  borderRadius: 5,
                  fontFamily: "Poppins",
                }}
                className="title"
              >
                {project.projectTitle}
              </Typography>

              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                {project.technologies}
              </Typography>

              <Typography variant="body1" className="copy" gutterBottom>
                {project.description}
              </Typography>

              <Grid container style={{ justifyContent: "center" }}>
                <Grid item>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      href={project.githubLink}
                      className="btn"
                      size="medium"
                      style={{ margin: 5 }} 
                    >
                      <ViewCarouselTwoToneIcon style={{ paddingRight: 5 }} />{" "}
                      GITHUB
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      href={project.projectWebsite}
                      className="btn"
                      size="medium"
                      style={{ margin: 5 }}
                    >
                      <ViewCarouselTwoToneIcon style={{ paddingRight: 5 }} />{" "}
                      WEBSITE
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default ProjectCards;
