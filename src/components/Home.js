
import React, {Component, ReactPropTypes as PropTypes} from 'react';
import withTheme from "@material-ui/core/styles/withTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";



const styles = theme => ({

});

class Home extends Component {



    render() {
        const classes = this.props.classes;
        const theme = this.props.theme;

        return (
            <div >
                <h1>
                    Home
                </h1>
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
    {}
)(withStyles(styles, { withTheme: true })(Home));

