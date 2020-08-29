import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {margeObjectInList} from "../../../utils";
import {createUser, deleteUser} from "../../../actions/dashboard/dashboard";


class UserCard extends React.Component {

    static propTypes = {
        selectId: PropTypes.string,
        user: PropTypes.object,
    }

    static defaultProps = {
        selectId: '',
        user: {},
    }


    constructor(props) {
        super(props);
        this.state = {
            user_name: !!props.user ? props.user.user_name : '',
            user_description: !!props.user ? props.user.user_description : '',
        };
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {selectId, user} = this.props;

        if (selectId !== prevProps.selectId) {
            this.setState({user_name: user.user_name, user_description: user.user_description});
        }
    }

    handleChangeDescription = (e) => {
        this.setState({user_description: e.target.value});
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight) + 'px';
    }

    handleCreate = (e) => {
        e.preventDefault();

        let {dashboard: {list, selectId}} = this.props;
        let team = list.filter(t => t.id === selectId)[0];

        team.users = [{...this.state, id: `user_${team.users.length}`}, ...team.users];
        let margedList = margeObjectInList(list, team);
        this.props.createUser({list: margedList});

        this.setState({user_name: '', user_description: ''});
    }

    handleDelete = () => {
        let {user, dashboard: {list, selectId}} = this.props;
        let team = list.filter(t => t.id === selectId)[0];
        let Users = team.users.filter(u => u.id !== user.id);
        team.users = Users;

        let margedList = margeObjectInList(list, team);
        this.props.deleteUser({list: margedList});
    }

    render() {
        let {user_name, user_description} = this.state
        let {user} = this.props;

        return (
            <div className="user-card">
                <form onSubmit={this.handleCreate}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="user-name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter here"
                               value={user_name || ''} required
                               onChange={(e) =>
                                   this.setState({user_name: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="user-name">Description</label>
                        <textarea className="form-control user-description" value={user_description || ''} required
                                  onChange={(e) => this.handleChangeDescription(e)}/>
                    </div>
                    {!user.id &&
                    <button type="submit" className="btn btn-sm btn-warning user-card-button">
                        Create User +
                    </button>
                    }
                </form>

                {!!user.id &&
                <button className="btn btn-sm btn-danger user-card-button" onClick={this.handleDelete}>
                    Delete User -
                </button>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.dashboard
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createUser,
    deleteUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCard));

