import React, { Component } from "react";
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

const styles = (theme) => ({
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
  render() {
    const { classes, data } = this.props;
    const { name, image } = data;
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
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.justifyCenter}>
          <Button variant="contained" className={classes.editButton}>
            Edit
          </Button>
          <Button variant="contained" className={classes.deleteButton}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(PatientCard);
