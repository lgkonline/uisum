import React from "react";
import PropTypes from "prop-types";

/**
 * List-Item und Link für das Action-Menü.
 */
class ActionMenuItem extends React.Component {
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
                    {...this.props}
                    href={this.props.href}
                    className={"nav-link " + this.props.className}
                >
                    <span className={this.props.icon} />
                    {this.props.label &&
                        <span className="ui-actions-label">
                            {this.props.icon &&
                                <span>&nbsp;</span>
                            }
                            {this.props.label}
                        </span>
                    }
                </a>
            </li>
        );
    }
}

ActionMenuItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,

    /**
     * Klasse eines Icons
     */
    icon: PropTypes.string,

    /**
     * Beschriftung des Links
     */
    label: PropTypes.any
};

export default ActionMenuItem;