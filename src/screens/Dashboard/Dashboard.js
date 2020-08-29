import React, {Component} from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import DashboardHeader from "../../components/headers/DashboardHeader";
import SideNavbar from "../../components/navbars/SideNavbar";
import UserCardContainer from "../../components/others/UserCardContainer";


class Dashboard extends Component {

    componentDidMount() {

    }

    render() {
        let {match} = this.props;
        console.error(this.props);
        return (
            <div className="dashboard-container">
                <DashboardHeader/>

                <div className="dashboard-team-user-container">
                    <div className="dashboard-team-col">
                        <SideNavbar/>
                    </div>

                    <div className="dashboard-user-col">
                        <UserCardContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.dashboard
});

const matchDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
