import React from "react";
import PropTypes from "prop-types";

/**
 * Shows tab bar on the bottom side. Can be filled with <code>&lt;MenuItem stacked /&gt;</code> elements.
 */
class Tabs extends React.Component {
    render() {
        return (
            <div className={`ui-tabs${this.props.mobileOnly ? " d-sm-none" : ""}`}>
                {this.props.children}
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.any,

    /**
     * Tabs will only be visible on smaller screens (Bootstrap's "sm").
     */
    mobileOnly: PropTypes.bool
};

export default Tabs;