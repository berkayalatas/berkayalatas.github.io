import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import js from "../../assets/img/js.svg";
import python from "../../assets/img/python.svg";
import php from "../../assets/img/php.svg";
import react from "../../assets/img/react.svg";
import django from "../../assets/img/dj.svg";
import jquery from "../../assets/img/jquery.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import materialui from "../../assets/img/materialui.svg";
import mysql from '../../assets/img/mysql.svg';
import mongodb from '../../assets/img/mongodb.svg';
import agile from '../../assets/img/agile.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#a5e3ef",
    borderRadius: 10,
  },
  item: {
    padding: 15,
  },
}));

const SkillCards = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item className={classes.item} xl={4} lg={4} md={6} sm={6} xs={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="HTML" src={html} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="HTML"   />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="CSS" src={css} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="CSS"  />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="JS" src={js} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="JavaScript" secondary="Primary Language" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="python" src={python} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="Python" secondary="My Secondary Language" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="PHP" src={php} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="PHP" />
            </ListItem>
          </List>
        </Grid>
        <Grid item className={classes.item} xl={4} lg={4} md={6} sm={6} xs={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="React" src={react} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="React" secondary="My Favorite Library" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Bootstrap" src={bootstrap} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="Bootstrap" secondary="React-Bootstrap Reactstrap"/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Material UI" src={materialui} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="Material-UI" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Django" src={django} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="Django" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="jQuery" src={jquery} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary=" jQuery" />
            </ListItem>
          </List>
        </Grid>
        <Grid item className={classes.item} xl={4} lg={4} md={6} sm={6} xs={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="MySQL" src={mysql} variant="rounded" style={{height:20}} />
              </ListItemAvatar>
              <ListItemText primary="MySQL" secondary="Structured Query Language" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="MongoDB" src={mongodb} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="MongoDB" secondary="NoSQL" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Agile Approach" src={agile} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary="Agile Workflow" secondary="Scrum Framework" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillCards;
