
import React from "react";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import TextField from "@material-ui/core/TextField";
import { Button, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { motion } from "framer-motion";

const ContactForm = () => {
  //CSS
  const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
      color: "#d8d0d0",
      "& .MuiInputBase-root": {
        color: "white",
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
      color : '#bfcfce'
    },
    cssFocused: {},

  }));
  const classes = useStyles();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                    inputMode: "numeric"
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
                  name="lastName"
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
                    inputMode: "numeric"
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
                    inputMode: "numeric"
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="yourMessage"
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
                  }}
                  inputProps={{
                    maxLength: "10",
                    minLength: "5",
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
                  color="primary"
                  startIcon={<MailOutlineRoundedIcon />}
                  className={classes.submit}
                  onClick={submitForm}
                >
                  Send
                </Button>
              </motion.div>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;