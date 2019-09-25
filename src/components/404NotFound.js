
import React, {Component, ReactPropTypes as PropTypes} from 'react';
import withTheme from "@material-ui/core/styles/withTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";



const styles = theme => ({

});

class NotFound404 extends Component {



    render() {
        const classes = this.props.classes;
        const theme = this.props.theme;

        return (
            <div >
                <h1>
                    404
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
)(withStyles(styles, { withTheme: true })(NotFound404));

