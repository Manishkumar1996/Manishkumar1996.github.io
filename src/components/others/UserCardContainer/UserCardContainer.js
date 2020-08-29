import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import UserCard from "../../cards/UserCard";


class UserCardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let {dashboard: {list, selectId}} = this.props;
        if (!selectId) return (
            <div className="user-card-container">
                <h2 className="user-container-heading">Team 1</h2>
            </div>
        );

        let team = list.filter(t => t.id === selectId)[0];
        let users = team.users || []

        return (
            <div className="user-card-container">
                <h2 className="user-container-heading">Team 1</h2>
                <div className="user-cards">
                    <UserCard/>

                    {users.map(user => (
                        <UserCard key={user.id} user={user} selectId={selectId}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.dashboard
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCardContainer));

