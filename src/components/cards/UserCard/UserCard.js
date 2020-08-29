import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {createUser, deleteUser, updateUser} from "../../../actions/dashboard/dashboard";


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
        this.setState({
            user_description: e.target.value
        }, () => {
            this.handleUpdateUser();
        });
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight) + 'px';
    }

    handleUpdateUser = () => {
        let {user} = this.props;
        if (user.id) {
            this.props.updateUser({user: {...user, ...this.state}});
        }
    }

    handleCreate = (e) => {
        e.preventDefault();
        this.props.createUser({user: {...this.state}});
        this.setState({user_name: '', user_description: ''});
    }

    handleDelete = () => {
        let {user} = this.props;
        this.props.deleteUser({user});
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
                                   this.setState({user_name: e.target.value}, this.handleUpdateUser)}/>
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
    updateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserCard));

