import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";
import ActionMenuItem from "./ActionMenuItem.js";

/**
 * Das Action-Menü an der oberen rechten Ecke einer Seite. Hier können Aktionen platziert werden, die im Kontext der aktuellen Seite stehen.
 */
class ActionMenu extends React.Component {
    constructor() {
        super();

        this.uniqueId = "ui-action-menu-" + Utilities.guid();

        this.state = {
            actionsToggledIn: null
        }
    }

    static get defaultProps() {
        return {
            hideToggleAction: false
        };
    }

    componentDidMount() {
        this.initToggleStatus();

        const uiWrapper = document.querySelector(".ui-wrapper");

        if (uiWrapper) {
            uiWrapper.onclick = (event) => {
                Utilities.hideActions();
                this.initToggleStatus();
            };
        }
    }

    toggleActions() {
        Utilities.toggleActions([document.getElementById(this.uniqueId).parentElement]);
        this.initToggleStatus();
    }

    initToggleStatus() {
        const uiActionsEl = document.querySelector(".ui-actions");

        this.setState({
            actionsToggledIn: uiActionsEl && Utilities.hasClass(uiActionsEl, "open")
        });
    }

    render() {
        return (
            <ul id={this.uniqueId} className="ui-actions-menu nav navbar-nav navbar-right fluent-btn themed">
                <div className="fluent-btn-ball" />

                {!this.state.actionsToggledIn && !this.props.hideToggleAction ?
                    <ActionMenuItem
                        className="ui-actions-menu-toggle px-3"
                        onClick={() => this.toggleActions()}
                        icon={window.uiGridRef && window.uiGridRef.state.icons.actionMenu}
                    />
                    : ""
                }

                {this.props.children}
            </ul>
        );
    }
}

ActionMenu.propTypes = {
    /**
     * Versteckt die drei Punkte in mobiler Ansicht.
     * Das kann nützlich sein, wenn mehrere ActionMenus genutzt werden, aber nicht überall der Toggle angezeigt werden soll.
     */
    hideToggleAction: PropTypes.bool
};

export default ActionMenu;