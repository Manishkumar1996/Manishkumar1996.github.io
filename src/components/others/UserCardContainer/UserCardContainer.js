import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import UserCard from "../../cards/UserCard";
import {isStringIncludes} from "../../../utils";


class UserCardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    componentDidMount() {

    }

    render() {
        let {dashboard: {list, selectId}} = this.props;
        let {search} = this.state;
        if (!selectId) return null;

        let team = list.filter(t => t.id === selectId)[0];
        let users = team.users || []

        if (!!search) {
            users = users.filter(u => isStringIncludes(u, search));
        }

        return (
            <div className="user-card-container">
                <div className="d-flex justify-content-between user-card-container-header">
                    <h2 className="user-container-heading">{team.team_name}</h2>
                    <input type="text" className="form-control" placeholder="Search user by name"
                           value={search || ''}
                           onChange={(e) =>
                               this.setState({search: e.target.value}
                               )}/>
                </div>
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

