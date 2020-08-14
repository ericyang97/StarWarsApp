import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function FilmCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={4}>
      <Card variant="outlined">
        <CardHeader title={props.film.title} />
        <CardContent>
          <Typography variant="subtitle1">
            Release Date: {props.film.date}
          </Typography>
          <Typography variant="body1">{props.film.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            View More
          </Button>
        </CardActions>
      </Card>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          Star Wars: {props.film.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1" gutterBottom>
            Director: {props.film.director}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Producer(s): {props.film.producer}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.film.description}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Species:
            {props.film.species.map((specie) => (
              <div>
                <a href={specie}>{specie}</a>
              </div>
            ))}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Starships:
            {props.film.starships.map((starship) => (
              <div>
                <a href={starship}>{starship}</a>
              </div>
            ))}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Vehicles:
            {props.film.vehicles.map((vehicle) => (
              <div>
                <a href={vehicle}>{vehicle}</a>
              </div>
            ))}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Characters:
            {props.film.characters.map((character) => (
              <div>
                <a href={character}>{character}</a>
              </div>
            ))}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Planets:
            {props.film.planets.map((planet) => (
              <div>
                <a href={planet}>{planet}</a>
              </div>
            ))}
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
