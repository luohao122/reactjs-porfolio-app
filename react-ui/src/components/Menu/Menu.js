import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import MenuIcon from "@material-ui/icons/Menu";
import { green } from "@material-ui/core/colors";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
  },
  createButton: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    color: "#fff",
  },
});

class Menu extends React.Component {
  renderLinks() {
    const { classes } = this.props;

    if (this.props.authenticated) {
      return (
        <>
          <Button
            className={classes.createButton}
            variant="contained"
            component={Link}
            to="/posts/new"
            startIcon={<CreateIcon />}
          >
            Create new post
          </Button>
          <Button color="inherit" component={Link} to="/posts/list">
            Post List
          </Button>
          <Button color="inherit" component={Link} to="/signout">
            Sign Out
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
        </>
      );
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              component={Link}
              to="/"
              color="inherit"
            >
              Posts Material-UI
            </Typography>
            {this.renderLinks()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default compose(withStyles(useStyles), connect(mapStateToProps))(Menu);
