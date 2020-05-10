import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions'

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUsers() {
        
      return  this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        }) 
    }

    render() {
        return (
            <div>
                <p>Here are the list of users</p>
                {this.renderUsers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export const loadData = (store) => {
   return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps,{fetchUsers})(UserList);