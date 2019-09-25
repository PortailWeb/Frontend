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
import {CloseDrawer} from "../actions/drawerActions";
import {Link, NavLink, withRouter} from "react-router-dom";
import {Dashboard, Help, History, Home, Receipt, Settings, Store, Subject} from "@material-ui/icons";


const drawerWidth = 240;
const styles = theme => ({

    root: {

    },
    icon:{
        color: theme.palette.primary.light
    },
    text: {
      color: theme.palette.primary.contrastText
    },
    link:{
        textDecoration: 'none',
        '&:hover':{
            color: theme.palette.primary.dark
        }
    },
    selected:{
        backgroundColor: theme.palette.primary.dark,
        borderLeft: `solid 3px ${theme.palette.primary.light}`
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: {
        backgroundColor: theme.palette.primary.dark,
        ...theme.mixins.toolbar
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,

    }
});

class Navigation extends Component {




    handleDrawerClose = () =>  {
        console.log("closing drawer");
        this.props.CloseDrawer();
    };

    isActive= (link) => {
        let location = this.props.location.pathname.toString();
        return location === link ? this.props.classes.selected : '';
    };

    render() {
        const classes = this.props.classes;
        const theme = this.props.theme;
        const paths1 = ['/acceuil','/produits','/commandes','/factures','/historique'];
        const paths2 = ['/aide','/parametres'];
        const icons1 = [<Home className={classes.icon} />, <Store className={classes.icon} /> ,
            <Subject className={classes.icon} /> ,<Receipt className={classes.icon} /> ,<History className={classes.icon} /> ];
        const icons2 = [<Help className={classes.icon}/>,<Settings className={classes.icon}/>];
        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {['Acceuil', 'Produits', 'Mes commandes','Factures','Historique de paiement'].map((text, index) => (
                        <NavLink className={classes.link}  to={paths1[index]} >

                        <ListItem key={text}  className={this.isActive(paths1[index])} button  >

                            <ListItemIcon > {icons1[index]} </ListItemIcon >
                            <ListItemText className={classes.text} primary={text}/>
                        </ListItem>
                        </NavLink>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Aide', 'Parametres'].map((text, index) => (
                        <NavLink className={classes.link}  to={paths2[index]} >

                            <ListItem key={text}  className={this.isActive(paths2[index])} button  >

                                <ListItemIcon > {icons2[index]} </ListItemIcon >
                                <ListItemText className={classes.text} primary={text}/>
                            </ListItem>
                        </NavLink>

                    ))}
                </List>
            </div>
        );

        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer

                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.drawerMobileOpened}
                        onClose={this.handleDrawerClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        authentificated: state.authentificated,
        drawerMobileOpened : state.drawerMobileOpened
    };
}

export default connect(
    mapStateToProps,
    {SignIn,CloseDrawer}
)(
    withRouter(
        withStyles(styles, { withTheme: true })(
            Navigation
        ))
);

