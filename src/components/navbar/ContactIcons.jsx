import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid } from "@material-ui/core";

const ContactIcons = () => {
  return (
    <div>
      <Grid container className="logo-container">
        <Grid item className="icon">
          <a href="mailto:berkay.3304@gmail.com">
            <MailOutlineIcon color="primary" fontSize="default" />
          </a>
        </Grid>
        <Grid item className="icon">
          <a href="https://www.linkedin.com/in/berkayalatas/">
            <LinkedInIcon color="primary" fontSize="default" />
          </a>
        </Grid>
        <Grid item className="icon">
          <a href="https://www.linkedin.com/in/berkayalatas/">
            <GitHubIcon color="primary" fontSize="default" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
export default ContactIcons;
