import React from "react";
import PropTypes from "prop-types";

class PageWrapper extends React.Component {
    static get defaultProps() {
        return {
            active: true,
            className: ""
        };
    }

    render() {
        return (
            <div className={"page-wrapper " + (this.props.active ? "active " : "") + (this.props.className)}>{this.props.children}</div>
        );
    }
}

PageWrapper.propTypes = {
    children: PropTypes.any,
    active: PropTypes.bool,
    className: PropTypes.string
};

export default PageWrapper;