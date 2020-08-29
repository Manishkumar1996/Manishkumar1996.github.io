import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Select from "react-select";
import {createTeam} from "../../../actions/dashboard/dashboard";
import {randomIdGenerate} from "../../../utils";


class DashboardHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            team_name: '',
            team_type: '',
            users: [],
        };
    }

    teamList = [
        {label: 'Team', value: 'team'}
    ]

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleCreateTeam = (e) => {
        e.preventDefault();
        this.props.createTeam({id: randomIdGenerate('team_'), ...this.state});
        this.setState({team_type: '', team_name: ''});
    }


    render() {
        let {team_name, team_type} = this.state;

        return (
            <div className="dashboard-header-container">
                <div className="dashboard-header">
                    <div className="dashboard-team-create">
                        <form onSubmit={(e) => this.handleCreateTeam(e)}>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="pwd">Select Type:</label>
                                    <Select className="custom-react-select" options={this.teamList}
                                            placeholder="choose Any"
                                            value={this.teamList.filter(team => team.value === team_type)[0] || ''}
                                            onChange={({value}) => this.setState({team_type: value})}/>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="name">Team Name</label>
                                    <input type="text" className="form-control" placeholder="Enter here"
                                           value={team_name || ''} required
                                           onChange={(e) =>
                                               this.setState({team_name: e.target.value}
                                               )}/>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <button type="submit" className="btn btn-warning btn-sm team-create-button">
                                        CREATE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createTeam,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardHeader));

