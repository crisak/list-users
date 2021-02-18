import "./style.css";
import React, { Component } from "react";
import Item from "../item/Item";
import { getUsers } from "../../../redux/reducers/users";
import { connect } from "react-redux";
import Header from "./../header/Header";


class Table extends Component {

    render() {
        const { users } = this.props;

        return (
            <div className="table">
                <Header
                    titles={['Id', 'Name', 'E-mail']}
                />
                {
                    users.map((user) => (
                        <Item
                            key={user.id}
                            user={user}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state)
    };
};

export default connect(mapStateToProps)(Table);