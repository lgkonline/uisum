import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";
import Caret from "./Caret";

/**
 * List-Item und Link für die Sidebar.
 */
class MenuItem extends React.Component {
    constructor() {
        super();

        this.state = {
            showDropdown: false,
            active: false
        };

        window.addEventListener("hashchange", event => {
            this.checkActive();
        });
    }

    static get defaultProps() {
        return {
            href: "javascript:void(0)",
            isActive: false,
            isHome: false,
            dropdownClassName: ""
        };
    }

    componentWillMount() {
        this.checkActive();
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }

        if (this.props.children) {
            this.setState({ showDropdown: !this.state.showDropdown });
        }

        // When user clicks again on active menu item, scroll to top of page
        if (this.props.href && this.props.href == location.hash) {
            Utilities.scrollToTop();
        }
    }

    checkActive() {
        this.setState({
            active: (location.hash.indexOf(this.props.href) > -1) || (this.props.isHome && (location.hash == "" || location.hash == "#/") ? true : false)
        });
    }

    render() {
        const className = "ui-toggle-page ui-sidebar-btn btn" +
            (this.props.className ? " " + this.props.className : "") +
            (this.props.children ? " ui-sidebar-dropdown-toggle" : "");

        const icon = this.props.icon + (this.props.children ? " ui-sidebar-dropdown-icon" : "");

        let props = {
            id: "menu-item-" + Utilities.guid()
        };

        Object.keys(this.props).map(key => {
            if (key != "isActive" && key != "isHome" && key != "children" && key != "dropdownClassName" && key != "ballClassName") {
                props[key] = this.props[key];
            }
        });

        return (
            <div>
                <a
                    {...props}
                    className={className + (this.props.isActive || this.state.active ? " active" : "")}
                    onClick={event => this.onClick(event)}
                >
                    {this.props.children &&
                        <Caret
                            open={this.state.showDropdown}
                            mirrored
                            className="ui-sidebar-dropdown-caret mt-2"
                        />
                    }
                    <span className={icon}></span> <span className="ui-sidebar-label">{this.props.label}</span>
                </a>
                {this.state.showDropdown &&
                    <div className={"ui-sidebar-dropdown " + this.props.dropdownClassName}>
                        {this.props.children}
                    </div>
                }
            </div>
        );
    }
}

MenuItem.propTypes = {
    /**
     * Setzt to-Property der NavLink-Komponente aus React Router.
     */
    to: PropTypes.string,

    /**
     * Kann als Alternative zu to benutzt werden.
     */
    href: PropTypes.string,

    /**
     * onClick Event
     */
    onClick: PropTypes.func,

    /**
     * Klasse eines Icons
     */
    icon: PropTypes.string,

    /**
     * Beschriftung des Links
     */
    label: PropTypes.string,

    /**
     * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
     */
    isActive: PropTypes.bool,

    /**
     * Als MenuItem für Startseite deklariert.
     */
    isHome: PropTypes.bool,

    /**
     * Ergänzung der Klasse vom Dropdown-Menü.
     */
    dropdownClassName: PropTypes.string,

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children: PropTypes.any
};

export default MenuItem;