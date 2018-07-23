import React from "react";
import PropTypes from "prop-types";

import Switch from "./Switch";

/**
 * Switch für das Action-Menü.
 */
class ActionMenuSwitch extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            href: "javascript:void(0)"
        };
    }

    render() {
        return (
            <li className="nav-item">
                <a
                    href="javascript:void(0)"
                    className="nav-link ui-actions-menu-item"
                    onClick={() => {
                        console.log("click");
                        this.props.onChange();
                    }}
                >
                    <Switch
                        {...this.props}
                        elementType="span"
                    />

                    {this.props.label &&
                        <span className="ui-actions-label">&nbsp;{this.props.label}</span>
                    }
                </a>
            </li>
        );
    }
}

ActionMenuSwitch.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,

    /**
     * Beschriftung des Controls
     */
    label: PropTypes.any
};

export default ActionMenuSwitch;