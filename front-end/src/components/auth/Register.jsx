import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "#F64028",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  linkStyle: {
    color: "#459EED",
    textDecoration: "none",
  },
  textField: {
    "& label.Mui-focused": {
      color: "#459EED",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#459EED",
      },
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
    background: "#459EED",
    fontWeight: 600,
    "&:hover": {
      background: "#1a81dd",
    },
  },
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { email, name, password } = this.state;
    console.log(this.state);
    return (
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign Up</Typography>
          <form className={classes.form}>
            <TextField
              autoFocus
              className={classes.textField}
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              onChange={this.handleChange}
              value={name}
              variant="outlined"
            />
            <TextField
              autoComplete="email"
              className={classes.textField}
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              onChange={this.handleChange}
              value={email}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password}
              variant="outlined"
            />
          </form>
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            onClick={this.handleSubmit}
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
        <Grid container justify="center">
          <Grid item>
            <Link className={classes.linkStyle} to="/" key="/">
              Have an account Login
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Register);
