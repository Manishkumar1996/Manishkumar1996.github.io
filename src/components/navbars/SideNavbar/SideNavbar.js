import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {selectTeam} from "../../../actions/dashboard/dashboard";


class SideNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleClickSelect = (id) => {
        this.props.selectTeam({id})
    }

    render() {
        let {dashboard: {list, selectId}} = this.props;

        return (
            <div className="sidenavbar-container">
                <h2 className="sidenavbar-header">Teams</h2>
                <ul className="list-unstyled sidenavbar-list-container">
                    {list.map(team => (
                        <li key={team.id} className={`sidenavbar-list ${team.id === selectId ? 'active' : ''}`}
                            onClick={() => this.handleClickSelect(team.id)}>
                            {team.team_name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.dashboard
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectTeam,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNavbar));

