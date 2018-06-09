import React from "react";
import PropTypes from "prop-types";

/**
 * Die Seitenleiste für das Grid.
 */
class SidebarMenu extends React.Component {
    render() {
        return (
            <div className={"ui-sidebar " + (this.props.sidebarClass ? this.props.sidebarClass : "")}
                style={this.props.sidebarStyle ? this.props.sidebarStyle : {}}
            >
                <div className={"ui-menu fluent-btn themed " + (this.props.menuClass ? this.props.menuClass : "")}
                    style={this.props.menuStyle ? this.props.menuStyle : {}}
                >
                    <div className="fluent-btn-ball" />
                    {this.props.children}
                </div>

                {this.props.bottomContent &&
                    <div className="ui-sidebar-bottom">
                        {this.props.bottomContent}
                    </div>
                }
            </div>
        );
    }
}

SidebarMenu.propTypes = {
    /**
     * Erweiterung der className-Property der Seitenleiste.
     */
    sidebarClass: PropTypes.string,

    /**
     * Setzt die style-Property der Seitenleiste.
     */
    sidebarStyle: PropTypes.object,

    /**
     * Erweiterung der className-Property des Menüs.
     */
    menuClass: PropTypes.string,

    /**
     * Setzt die style-Property des Menüs.
     */
    menuStyle: PropTypes.object,

    /**
     * Inhalte für den Footer der Sidebar
     */
    bottomContent: PropTypes.any

};

export default SidebarMenu;