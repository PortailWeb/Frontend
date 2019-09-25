import React, {Component, ReactPropTypes as PropTypes} from 'react';
import withTheme from "@material-ui/core/styles/withTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from "@material-ui/core/Drawer";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {connect} from "react-redux";
import {SignIn} from "../actions/authActions";
import Header from "./Header";
import Navigation from "./Navigation";
import Products from "./Products";
import Home from "./Home";
import NotFound404 from "./404NotFound";
import {Route, BrowserRouter as Router ,Switch} from "react-router-dom";


const styles = theme => ({
    root: {
        display: 'flex',
    },

    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

class Main extends Component {



    render() {
        const classes = this.props.classes;
        const theme = this.props.theme;


        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <Router>
                <Navigation />
                <main className={classes.content}>
                    <div className={classes.toolbar}/>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/acceuil" component={Home} />
                    <Route exact path="/produits" component={Products} />
                    <Route component={NotFound404} />
                    </Switch>
                </main>
                </Router>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        authentificated: state.authentificated
    };
}

export default connect(
    mapStateToProps,
    {SignIn}
)(withStyles(styles, { withTheme: true })(Main));

