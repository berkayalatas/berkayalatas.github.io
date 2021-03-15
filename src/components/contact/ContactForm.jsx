import React, { useState } from "react";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import TextField from "@material-ui/core/TextField";
import { Button, LinearProgress, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from '@material-ui/core/Collapse';
import { Formik, Field } from "formik";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import emailjs from "emailjs-com";

const ContactForm = () => {
  //CSS
  const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
      color: "#d8d0d0",
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#099d9d",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#099d9d",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#05aeff",
        },
      },
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
      background: "#099d9d",
      borderRadius: 10,
      padding: "10 10",
      color: "#121114",
      marginTop: 10,
      fontFamily: "Poppins",
      fontSize: 18,
      textDecoration: "none",
      "&:hover": {
        color: "#16b4b4",
        background: "#0f0e0e",
        transition: "0.3s",
      },
    },
    inputStyle: {
      color: "#fff",
    },
    cssLabel: {
      color: "#bfcfce",
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(true); //close alert button
  const [emailSent, setEmailSent] = useState(false);

  /* Receive data from contact form by email*/
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_es7l897",
        "template_r9wmhvd",
        e.target,
        "user_5QxnFjF9fjdqCMAYK0gki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setEmailSent(!emailSent);
  }
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <>
            <Container fixed>
              {emailSent && (
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    severity="success"
                    style={{ margin: 10 }}
                  >
                    <strong>Thank you</strong>, I have received your message
                    successfully.{" "}
                  </Alert>
                </Collapse>
              )}
            </Container>
            <form className={classes.form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    inputProps={{
                      maxLength: 12,
                      minLength: 3,
                      className: classes.inputStyle,
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      name: "firstname",
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    className="textfield"
                    required
                    fullWidth
                    id="custom-css-outlined-input"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lname"
                    inputProps={{
                      maxLength: 12,
                      minLength: 3,
                      className: classes.inputStyle,
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      name: "lastname",
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputProps={{
                      className: classes.inputStyle,
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      name: "email",
                      inputMode: "numeric",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    id="yourMessage"
                    variant="outlined"
                    name="message"
                    multiline
                    required
                    autoComplete="message"
                    fullWidth
                    label="Your Message"
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                      name: "message",
                    }}
                    inputProps={{
                      maxLength: "600",
                      minLength: "10",
                      className: classes.inputStyle,
                    }}
                  />
                </Grid>
              </Grid>
              {isSubmitting && <LinearProgress />}
              <br />

              <Grid container style={{ justifyContent: "center" }}>
                <motion.div
                  className="animatable"
                  whileHover={{
                    scale: 1.0,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    startIcon={<MailOutlineRoundedIcon />}
                    className={classes.submit}
                    onClick={submitForm}
                  >
                    Send
                  </Button>
                </motion.div>
              </Grid>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
