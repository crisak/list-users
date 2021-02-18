import "./style.css";
import { Fragment, Component } from "react";



class Item extends Component {

    render() {
        const { user } = this.props;
        const { id, name, email } = user;

        return (
            <Fragment>
                <div
                    className="row-table"
                >
                    <div className="col-table">
                        {id}
                    </div>
                    <div className="col-table">
                        {name}
                    </div>
                    <div className="col-table">
                        {email}
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default Item;