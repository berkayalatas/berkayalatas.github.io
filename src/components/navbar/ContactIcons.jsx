import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid, Tooltip } from "@material-ui/core";

const ContactIcons = () => {
  const color = {
    color: "#16b4b4",
  };

  return (
    <div>
      <Grid container className="logo-container">
        <Grid item className="icon">
          <a href="mailto:berkay.3304@gmail.com">
            <Tooltip title="Send Mail">
              <MailOutlineIcon style={color} fontSize="default" />
            </Tooltip>
          </a>
        </Grid>
        <Grid item className="icon">
          <Tooltip title="LinkedIn">
            <a href="https://www.linkedin.com/in/berkayalatas/">
              <LinkedInIcon style={color} fontSize="default" />
            </a>
          </Tooltip>
        </Grid>
        <Grid item className="icon">
          <Tooltip title="Github">
            <a href="https://www.linkedin.com/in/berkayalatas/">
              <GitHubIcon style={color} fontSize="default" />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};
export default ContactIcons;
