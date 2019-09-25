import React , {Component} from 'react';
import bgImage from '../resources/auth_bg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import withTheme from "@material-ui/styles/withTheme";
import {connect} from "react-redux";
import {SignIn, TypingAuthFields} from "../actions/authActions";

const styles = {

    root: {
        flexGrow: 1,
       height: '100vh'
    },
    grid: {
        height: '100vh',
    },
    gridContainer: {
        height: '100vh',
        padding: '10%'
    },
    textField:{
      width:'100%'
    },
    paper: {
        padding:'20px',
        textAlign: 'center',
        color: 'black',
        height:'100%'
    },
    subtitle:{
        color:'#cecece'
    },
    link:{
      fontSize:'12px'
    },
    bg: {
        backgroundImage: `url(${bgImage})`
    },
    button: {
        boxShadow: 'none !important',
        paddingRight:'40px',
        paddingLeft:'40px',
        paddingTop:'8px',
        paddingBottom:'8px'
    }

};

class Authentification extends Component {

    formData = {};

    handleFormChange = (event) =>{
        let fieldName = event.target.name;
        this.props.TypingAuthFields(fieldName);
        this.formData[fieldName] = event.target.value;
    };

    onSubmit = () => {
        this.props.SignIn(this.formData.username,this.formData.password);
    };

    render() {
        let classes = this.props.classes;
        let fieldsUi = this.props.authentificationUI;
        return (
            <div className={classes.root}>
                <Grid className={classes.grid} container spacing={0} direction="row" justify="center"
                      alignItems="stretch"
                >
                    <Hidden smDown >
                    <Grid className={classes.bg} item md={6}>
                    </Grid>
                    </Hidden>
                    <Grid container className={classes.gridContainer} direction="row" justify="center"
                          alignItems="center" xs={12} sm={12} md={6}>

                                <Grid item xs={12} style={{textAlign:'center',marginBottom:'20px'}}>
                                    <Typography variant="h3" gutterBottom color='primary'>
                                        Connexion
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom className={classes.subtitle}>
                                        Bienvenue! veuillez accédez à votre compte.
                                    </Typography>
                                </Grid>

                                <Grid item xs={10} style={{textAlign:'center',margin:'0px'}} >
                                    <TextField
                                        id="standard-with-placeholder"
                                        label="Nom d'utilisateur"
                                        onChange={this.handleFormChange}
                                        error={fieldsUi.usernameFieldError}
                                        placeholder="Nom d'utilisateur"
                                        className={classes.textField}
                                        margin="normal"
                                        name="username"
                                    />
                                <br/>
                                    <TextField
                                        id="standard-with-placeholder"
                                        label="Mot de passe"
                                        type="password"
                                        error={fieldsUi.passwordFieldError}
                                        placeholder="Mot de passe"
                                        className={classes.textField}
                                        margin="normal"
                                        onChange={this.handleFormChange}
                                        name="password"
                                    />

                                    <Grid container  direction="row" justify="center"
                                          alignItems="center" xs={12} style={{textAlign:'center'}}>
                                        <Grid className={classes.linkContainer} item xs={6} style={{textAlign:'center'}}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox

                                                        value="checkedB"
                                                        color="primary"
                                                    />
                                                }
                                                label="Rester connecté"
                                            />
                                        </Grid>
                                        <Grid className={classes.linkContainer} item xs={6} style={{textAlign:'center'}}>
                                            <div className={classes.link} style={{textAlign:'right'}}>Mot de passe oublié ?</div>

                                        </Grid>

                                    </Grid>
                                </Grid>


                                <Grid item xs={12} style={{textAlign:'center',marginTop:'50px'}}>

                                    <Button onClick={this.onSubmit} variant="contained" color="primary" className={classes.button}>
                                        Se connecter
                                    </Button>
                                </Grid>

                    </Grid>
                </Grid>
            </div>
        );

    }
}

function mapStateToProps(state, ownProps) {
    return {
        authentification: state.authentification,
        authentificationUI : state.authentificationUI
    };
}

export default connect(
    mapStateToProps,
    {SignIn, TypingAuthFields}
)(withTheme(withStyles(styles)(Authentification)));
