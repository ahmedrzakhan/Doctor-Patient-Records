import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { saveData } from "./../../localStorage/localStorage";
import { getAllPatients } from "./../../redux/patients/actions";
import PatientCard from "../patient/PatientCard";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Drawer,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";

const drawerWidth = 240;

const styles = (theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  buttonStyle: {
    background: "#E2E1DD",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkStyle: {
    color: "#459EED",
    textDecoration: "none",
  },
  gridStyle: {
    maxWidth: "100%",
    margin: "auto",

    [theme.breakpoints.down("md")]: {
      padding: "30px 5px 30px 5px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "50px 50px 30px 50px",
    },
  },
  headerStyle: {
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
    flexGrow: 1,
  },
  iconStyle: {
    color: "#459EED",
  },
  toolbar: theme.mixins.toolbar,
  toolbarStyle: {
    background: "#459EED",
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      patients: [],
    };
  }

  getPatients = async () => {
    const { getAllPatients } = this.props;

    getAllPatients();
  };

  checkAuthority = () => {
    const { doctors } = this.state;
    const { username } = this.props.match.params;
    getAllPatients();
    const authorized = doctors.find((doctor) => doctor.username === username);

    if (!authorized) {
      saveData("authorized", false);
    } else {
      saveData("authorized", true);
    }
  };

  getDoctors = async () => {
    const config = {
      method: "get",
      url: "http://localhost:5000/api/doctors/get-doctors",
    };

    try {
      const response = await axios(config);
      this.setState({
        doctors: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleLogout = () => {
    const { history } = this.props;
    history.push("/");
  };

  componentDidMount() {
    this.getPatients();
    this.getDoctors();
    this.checkAuthority();
  }

  render() {
    const { classes, patients } = this.props;
    if (patients.length === 0) {
      return null;
    }
    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbarStyle}>
            <Typography className={classes.headerStyle}>Hospital</Typography>
            <Button
              onClick={this.handleLogout}
              className={classes.buttonStyle}
              variant="contained"
              size="small"
              style={{ letterSpacing: 0.5 }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div
            className={classes.toolbar}
            style={{
              background: "#459EED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Hello
          </div>
          <Divider />
          <List>
            {["Dashboard"].map((text, index) => (
              <Link
                to={text.toLowerCase()}
                key={text.toLowerCase()}
                className={classes.linkStyle}
              >
                <ListItem button key={text}>
                  <ListItemIcon>
                    <DashboardIcon className={classes.iconStyle} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          {/* <AddStudent addNewStudent={this.addNewStudent} /> */}
          <Grid
            container
            spacing={3}
            className={classes.gridStyle}
            justify="center"
          >
            {patients.map((patient) => (
              <Grid item key={patient._id} xs={12} sm={8} md={6} lg={4}>
                <PatientCard data={patient} />
              </Grid>
            ))}
          </Grid>
          <Grid container justify="center" className={classes.paginationStyle}>
            {/* <Pagination
              count={numberOfPages}
              onChange={(e, value) => this.handlePageChange(e, value)}
            /> */}
          </Grid>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  patients: state.patients.patients,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPatients: () => dispatch(getAllPatients()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
