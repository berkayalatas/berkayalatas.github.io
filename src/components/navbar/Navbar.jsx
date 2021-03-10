
import React from "react";
import { Menu } from "antd";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import MailTwoToneIcon from "@material-ui/icons/MailTwoTone";
import Grid from "@material-ui/core/Grid";
//import logo from "../../assets/img/logo.png";

const style = {
  width: "100%",
  height: 55,
  top: 0,
  position: "fixed",
  zIndex: 999,
  background:
    "linear-gradient(90deg, rgba(13,25,30,1) 0%, rgba(3,3,10,1) 35%, rgba(3,3,10,1) 70%, rgba(13,25,30,1) 100%)",
  opacity: 0.8,
  color: "#00e8e8",
  display: "flex",
  fontFamily: "Poppins",
  fontWeight:400,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18,
  paddingRight: 40,
};

const Navbar = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Menu theme="light" style={style} mode="horizontal">
            {/* <Menu.Item key="logo">
              <a href="#home">
                <img
                  src={logo}
                  alt="LOGO"
                  style={{ width: 55, height: 50, margin: 30 }}
                />
              </a>
            </Menu.Item> */}

            <Menu.Item key="home" icon={<HomeTwoToneIcon />}>
              <a
                href="#home"
                style={{
                  textDecoration: "none",
                  color: "#00e8e8",
                }}
              >
                Home
              </a>
            </Menu.Item>

            <Menu.Item key="about" icon={<PersonOutlineTwoToneIcon />}>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  color: "#00e8e8",
                }}
              >
                About
              </a>
            </Menu.Item>

            <Menu.Item key="skills" icon={<SettingsTwoToneIcon />}>
              <a
                href="#skills"
                style={{
                  textDecoration: "none",
                  color: "#00e8e8",
                }}
              >
                Skills
              </a>
            </Menu.Item>

            <Menu.Item key="portolio" icon={<WorkTwoToneIcon />}>
              <a
                href="#portfolio"
                style={{
                  textDecoration: "none",
                  color: "#00e8e8",
                }}
              >
                Portfolio
              </a>
            </Menu.Item>

            <Menu.Item key="contact" icon={<MailTwoToneIcon />}>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#04f6ef",
                }}
              >
                Contact
              </a>
            </Menu.Item>
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;