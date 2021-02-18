import Table from "./components/table/table/Table";
import { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "./redux/actions/loadUsers";
import { getUsers } from "./redux/reducers/users";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };

    this.getUsers = this.getUsers.bind(this);
  }

  async getUsers() {
    this.setState({
      loading: true
    });

    const response = await fetch("https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE");
    const { data: users } = await response.json();

    this.props.loadUsers(users);
    this.setState({
      loading: false
    });
  }

  render() {

    return (
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={this.getUsers}
        >
          Get users
        </button>
        <hr />
        {
          this.state.loading && <p className="alert-info">Loading ...</p>
        }

        {
          this.props.users.length !== 0 && <Table />
        }

        { (!this.state.loading && this.props.users.length === 0) && <p className="alert-info">No users found</p>}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state)
  };
};

export default connect(mapStateToProps, { loadUsers })(App);
