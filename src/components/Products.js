
import React, {Component, ReactPropTypes as PropTypes} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import withTheme from "@material-ui/styles/withTheme";

import Product from "./Product";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {getProducts} from "../actions/productsActions";
import {useMediaQuery} from "@material-ui/core";

const classes=  theme => ({
    root:{
        flexGrow:1,
    },
    paper: {
        height: 140,
        width: 100
    },
    currentPage: {
        backgroundColor: theme.palette.primary.main,
        color: '#FEFEFE'
    },
    title : {

        [theme.breakpoints.down('sm')]: {
         margin:'auto'
        },
    }
});

class Products extends Component {


    componentDidMount() {
        this.props.getProducts(1,10)
    }

    nextPage = () => {
        const {list, currentPage, lastPage}= this.props.products;
        const num = parseInt(currentPage);
        if (currentPage<lastPage) this.props.getProducts(num+1,10)
    };

    getPage = (event) =>{
        this.props.getProducts(event.target.value,10)
    };

    previousPage = () => {
        const {list, currentPage, lastPage}= this.props.products;
        const num = parseInt(currentPage);
        if (currentPage>1) this.props.getProducts(num-1,10)
    };

    render() {
        const classes = this.props.classes;
       const {list, currentPage, lastPage}= this.props.products;
       const num = parseInt(currentPage);
        const attr1 = parseInt(currentPage) === 1 ;
        const attr2 = parseInt(currentPage) === lastPage;
        return (
            <div >
                <Grid container className={classes.root} >
                    <Grid item xs={12}>
                        <Grid container justify="space-between" alignItems="center" spacing={4} >
                            <Grid key="title" item className={classes.title}>
                                <h1>
                                    Produits
                                </h1>
                            </Grid>
                            <Grid item  className={classes.title}>
                                <ButtonGroup size="small" aria-label="small outlined button group">
                                    < Button disabled={attr1 } onClick={this.previousPage} > Précédent</Button>
                                    { num-2>0 ? <Button onClick={this.getPage} value={num-2}>{num-2}</Button> : ""}
                                    { num-1>0 ? <Button onClick={this.getPage} value={num-1} >{num-1}</Button> : ""}
                                    <Button className={classes.currentPage}>{num}</Button>
                                    { num+1<=lastPage ? <Button onClick={this.getPage} value={num+1}>{num+1}</Button> : ""}
                                    { num+2<=lastPage ? <Button onClick={this.getPage} value={num+2}>{num+2}</Button> : ""}
                                    <Button  disabled={attr2} onClick={this.nextPage}>Suivant</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="space-evenly" spacing={4} >
                            {list.map((product,index) =>
                                <Grid key={index} item>
                                    <Product value={product}/>
                                </Grid>

                            )}
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        authentificated: state.authentificated,
        products: state.products
    };
}

export default connect(
    mapStateToProps,
    {getProducts}
)(withStyles(classes, { withTheme: true })(Products));

