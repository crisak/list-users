import "./style.css";
import react, { Fragment } from "react";
import { connect } from "react-redux";

import { updateTheme } from "../../../redux/actions/updateTheme";
import { getTheme } from "../../../redux/reducers/theme";

const withChangeBackground = (Component) => {
    return class extends react.Component {
        constructor(props) {
            super(props);
            this.changeBackground = this.changeBackground.bind(this);
        }

        changeBackground() {
            this.props.updateTheme(this.props.theme === "dark" ? "light" : "dark");
        }

        render() {

            const classButton = this.props.theme === "dark"
                ? "btn-primary"
                : "btn-dark";


            return (
                <Fragment>
                    <Component
                        {...this.props}
                        theme={this.props.theme}
                    >
                        <div className="container-button">
                            <button
                                className={`btn btn-small ${classButton}`}
                                onClick={this.changeBackground}
                            >
                                Change color
                            </button>
                        </div>
                    </Component>
                </Fragment>

            );
        }
    }
};


class Header extends react.Component {
    render() {

        const { children, theme, titles } = this.props;
        const themeHeader = theme === "dark" ? " dark" : "";

        return (
            <Fragment>
                {
                    children
                }
                <div
                    className={`row-table header${themeHeader}`}
                >
                    {
                        titles.map((title, index) => (
                            <div
                                key={index}
                                className={`col-table header${themeHeader}`}
                            >
                                {title}
                            </div>
                        ))
                    }

                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: getTheme(state)
    };
};


export default connect(mapStateToProps, { updateTheme })(withChangeBackground(Header));