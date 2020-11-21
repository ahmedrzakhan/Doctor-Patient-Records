import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { saveData } from "./../../localStorage/localStorage";
import { getAllPatients } from "./../../redux/patients/actions";
import RenderCards from "./RenderCards";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Drawer,
  Divider,
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

  checkAuthority = () => {
    const { doctors } = this.state;
    const { username } = this.props.match.params;
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

  // handlePageChange = (e, pageNumber) => {
  //   const { getAllPatients, history, location } = this.props;

  //   history.push(`${location.pathname}?page=${pageNumber}`);
  //   const payload = { page: pageNumber, limit: 6 };

  //   getAllPatients(payload);

  //   window.scrollTo(0, 0);
  // };

  componentDidMount() {
    const { getAllPatients, location } = this.props;
    const page = location.search.split("page=")[1];

    const payload = { page: page, limit: 6 };

    getAllPatients(payload);
    this.checkAuthority();
    this.getDoctors();
  }

  render() {
    const { classes, patients, totalPatients, history, location } = this.props;
    const { username } = this.props.match.params;

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
            <Link
              to={`/dashboard/${username}?page=1`}
              key={`/dashboard/${username}?page=1`}
              className={classes.linkStyle}
            >
              <ListItem button key={username}>
                <ListItemIcon>
                  <DashboardIcon className={classes.iconStyle} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <RenderCards
            data={patients}
            totalPatients={totalPatients}
            history={history}
            location={location}
          />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  patients: state.patients.patients,
  totalPatients: state.patients.totalPatients,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPatients: (payload) => dispatch(getAllPatients(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
