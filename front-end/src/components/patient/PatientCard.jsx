import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { getAllPatients, deletePatient } from "./../../redux/patients/actions";

const styles = () => ({
  alignCenter: {
    textAlign: "center",
  },
  padding: {
    padding: 20,
  },
  media: {
    paddingTop: "81.25%",
    borderRadius: "50%",
    margin: "28px",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  editButton: {
    background: "#E2E1DD",
    color: "#459EED",
    "&:hover": {
      background: "#459EED",
      color: "#fff",
    },
  },
  deleteButton: {
    background: "#000",
    color: "#FFFFFF",
    "&:hover": { background: "#F64028" },
  },
});

class PatientCard extends Component {
  handleDelete = (id) => {
    const { deletePatient, getAllPatients, history, location } = this.props;
    deletePatient(id);

    const { search } = location;
    const page = search.split("page=")[1];
    const payload = { page, limit: 6 };
    getAllPatients(payload);
  };

  render() {
    const { classes, data } = this.props;
    const { name, image, medicines, _id } = data;
    return (
      <Card raised className={classes.padding}>
        <CardActionArea className={classes.alignCenter}>
          {image ? (
            <CardMedia image={data.image} className={classes.media} />
          ) : null}
          <CardContent>
            <Typography noWrap variant="h5">
              {name}
            </Typography>
            <Typography>Total Medicines: {medicines.length}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.justifyCenter}>
          <Button variant="contained" className={classes.editButton}>
            Edit
          </Button>
          <Button
            variant="contained"
            className={classes.deleteButton}
            onClick={() => this.handleDelete(_id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deletePatient: (payload) => dispatch(deletePatient(payload)),
  getAllPatients: (payload) => dispatch(getAllPatients(payload)),
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(PatientCard));
