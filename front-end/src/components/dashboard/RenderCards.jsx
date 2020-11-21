import React, { Component } from "react";
import { connect } from "react-redux";
import PatientCard from "./../patient/PatientCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { getAllPatients } from "./../../redux/patients/actions";

const styles = (theme) => ({
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
});

class RenderCards extends Component {
  handlePageChange = (e, pageNumber) => {
    const { getAllPatients, history, location } = this.props;

    history.push(`${location.pathname}?page=${pageNumber}`);
    const payload = { page: pageNumber, limit: 6 };

    getAllPatients(payload);

    window.scrollTo(0, 0);
  };
  render() {
    const { data: patients, totalPatients, classes } = this.props;
    const numberOfPages = Math.ceil(totalPatients / 6);

    return (
      <>
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
        <Grid container justify="center">
          <Pagination
            count={numberOfPages}
            onChange={(e, value) => this.handlePageChange(e, value)}
          />
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    getAllPatients: (payload) => dispatch(getAllPatients(payload)),
  });
  

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(RenderCards));
