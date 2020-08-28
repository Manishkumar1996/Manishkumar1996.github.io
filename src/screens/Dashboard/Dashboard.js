import React, {Component} from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class Dashboard extends Component {

    componentDidMount() {

    }

    render() {
        let {match} = this.props;
        return (
            <div className="container dashboard-container">

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.dashboard
});

const matchDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
