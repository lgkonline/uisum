import React from "react";
import SidebarMenu from "./SidebarMenu.js";
import Utilities from "./Utilities.js";
import PropTypes from "prop-types";

// Damit Events auch in IE funktionieren
require("custom-event-polyfill/custom-event-polyfill.js");

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * Das Grundgerüst von  App. Objekt wird über window.uiGridRef global ansprechbar sein.<br>
 * Außerdem kann über <code>uiGridRef.addEventListener(eventName, (prevProps, prevState) => { })</code> ein Event-Listener angefügt werden.
 * <br><br>
 * <h3 class="mt-4 mb-3">Allowed event listeners</h3>
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Example</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Komponente wurde aktualisiert.</td>
 * <td><code>uiGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.</td>
 * <td><code>uiGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidHide</th>
 * <td>Seite wurde versteckt (andere Seite wurde angezeigt).</td>
 * <td><code>uiGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
 */
class Grid extends React.Component {
    constructor() {
        super();

        window.uiGridRef = this;

        this.defaultMatch = ["home"];

        this.defaultIcons = {
            "search": "icon-search",
            "actionMenu": "icon-dots-three-vertical",
            "menu": "icon-menu",
            "success": "icon-checkmark",
            "info": "icon-info",
            "warning": "icon-warning",
            "danger": "icon-cancel-circle",
            "cancel": "icon-cross",
        };

        this.state = {
            sidebarIn: false,
            match: null,
            history: [],
            hash: location.hash,
            config: null
        };

        this.hideSidebar = this.hideSidebar.bind(this);

        window.addEventListener("hashchange", event => {
            this.initMatch();
        });

        this.eventListeners = [];
    }

    static get defaultProps() {
        return {
            expandSidebar: false,
            hideSidebarMenu: false,
            pages: [],
            icons: this.defaultIcons
        };
    }

    componentWillMount() {
        document.addEventListener("toggleSidebar", () => {
            this.toggleSidebar();
        }, false);

        this.setState({
            sidebarIn: this.props.sidebarIn,

            // Merges default icon config with custom set icons
            icons: Object.assign(this.defaultIcons, this.props.icons)
        });

        this.initMatch();
    }

    componentDidMount() {
        const me = this;

        document.addEventListener("touchstart", (event) => {
            const xPos = event.touches[0].pageX;

            if (xPos < 5) {
                me.toggleSidebar(event);
            }
            else if (me.state.sidebarIn && xPos > 20) {
                me.toggleSidebar(event);
            }
        });

        Utilities.registerFluentBtns();
    }

    componentDidUpdate(prevProps, prevState) {
        this.eventListeners.map(eventListener => {
            if (eventListener[0] == "componentDidUpdate") {
                eventListener[1](prevProps, prevState);
            }

            if (eventListener[0] == "pageDidShowAgain") {
                let pageId = eventListener[1];
                let callback = eventListener[2];

                if (prevState.hash != this.state.hash && this.state.match[0] == pageId) {
                    callback(prevProps, prevState);
                }
            }

            if (eventListener[0] == "pageDidHide") {
                let pageId = eventListener[1];
                let callback = eventListener[2];

                if (prevState.hash != this.state.hash && prevState.match[0] == pageId) {
                    callback(prevProps, prevState);
                }
            }
        });
    }

    toggleSidebar(event) {
        if (this.state.sidebarIn) {
            this.hideSidebar(event);
        }
        this.setState({ sidebarIn: true });
    }

    hideSidebar(e) {
        if (!(
            Utilities.hasClass(e.target, "ui-open-menu") ||
            Utilities.hasClass(e.target, this.state.icons.actionMenu) ||
            Utilities.hasClass(e.target, "ui-search") ||
            Utilities.hasClass(e.target, "ui-search-control") ||
            Utilities.hasClass(e.target, "ui-search-btn") ||
            Utilities.hasClass(e.target, "ui-search-btn-icon") ||
            Utilities.hasClass(e.target, "ui-sidebar-dropdown-toggle") ||
            Utilities.hasClass(e.target, "ui-sidebar-dropdown-caret") ||
            Utilities.hasClass(e.target, "ui-sidebar-dropdown-icon") ||
            Utilities.hasClass(e.target, "ui-sidebar-exception")
        )) {
            this.setState({ sidebarIn: false });
        }
    }

    initMatch() {
        let newMatch;

        if (location.hash && location.hash != "" && location.hash != "#/") {
            newMatch = decodeURIComponent(location.hash.replace("#", "")).split("/").filter(n => n != "");
        }
        else {
            newMatch = this.defaultMatch;
        }

        if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
            this.state.history.push(newMatch[0]);
        }

        this.setState({ match: newMatch, history: this.state.history, hash: location.hash });
    }

    addEventListener(param1, param2, param3) {
        this.eventListeners.push([param1, param2, param3]);
    }

    render() {
        return (
            <div>
                <div className="ui-wrapper"></div>
                <div id={this.props.id ? this.props.id : ""}
                    style={this.props.style ? this.props.style : {}}
                    className={"ui-grid" + (this.props.className ? this.props.className : "") +
                        (this.state.sidebarIn ? " open" : "") +
                        (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") +
                        (this.props.expandSidebar ? " expand-sidebar" : "")}
                    onClick={this.hideSidebar}
                >
                    <div className="ui-sidebar-toggler">
                        {!this.props.hideSidebarMenu ?
                            <button
                                type="button"
                                className="ui-open-menu ui-sidebar-btn btn btn-primary fluent-btn"
                                onClick={() => {
                                    this.setState({ sidebarIn: !this.state.sidebarIn });
                                }}
                            >
                                <div className="fluent-btn-ball ui-sidebar-exception" />
                                <span className={this.state.icons.menu}></span>
                            </button>
                            :
                            ""
                        }
                    </div>

                    {this.props.children}

                    {this.props.pages.map(page =>
                        this.state.history.indexOf(page.name) > -1 &&
                        <div
                            key={page.name}
                            className={"router-page " + (this.state.match[0] == page.name ? "active" : "")}
                        >
                            {page.component}

                            {this.props.footer}
                        </div>
                    )}

                    <div className="ui-status-circle ui-loading ui-status-loading">
                        <div className="spinner-bounce-circle">
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="ui-status-circle ui-status-success bg-success">
                        <span className={this.state.icons.success}></span>
                    </div>

                    <div className="ui-status-circle ui-status-info bg-info">
                        <span className={this.state.icons.info}></span>
                    </div>

                    <div className="ui-status-circle ui-status-warning bg-warning">
                        <span className={this.state.icons.warning}></span>
                    </div>

                    <div className="ui-status-circle ui-status-danger bg-danger">
                        <span className={this.state.icons.danger}></span>
                    </div>

                    <div className="ui-status-alert alert">
                        <button
                            type="button"
                            className="close"
                        >&times;</button>
                        <div className="alert-body" />
                    </div>
                </div>
            </div>
        );
    }
}

// Grid.toggleSidebar = null;

Grid.SidebarMenu = SidebarMenu;

Grid.propTypes = {
    /**
     * The sidebar will be expanded on full view.<br>
     * Die Sidebar ist bei Vollbild automatisch erweitert.
     */
    expandSidebar: PropTypes.bool,

    /**
     * Disables the sidebar.
     * Deaktiviert die Sidebar.
     */
    hideSidebarMenu: PropTypes.bool,

    /**
     * Registers pages.<br>
     * Registriert Seiten.<br>
     * Example: [{name: "home", component: <HomePage />}]
     */
    pages: PropTypes.array,

    /**
     * Let's you define the default icons.<br>
     * Lässt dich die Standard-Icons definieren.<br>
     * <strong>Example:</strong><br><code>{<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"search": "fas fa-search",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"actionMenu": "fas fa-ellipsis-v ",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"menu": "fas fa-bars",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"success": "fas fa-check",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"info": "fas fa-info",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"warning": "fas fa-exclamation-triangle",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"danger": "fas fa-times",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"cancel": "fas fa-times"<br>
                }</code><br>
     */
    icons: PropTypes.object,

    /**
     * You can set a footer element that always be at the bottom of the app.<br>
     * Du kannst ein Footer-Element setzen, das immer am Ende der App angezeigt wird.<br>
     * <strong>Example:</strong><br><code>(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;footer className="bg-white ml-sidebar-width p-3 text-center"&gt;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's a footer<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/footer&gt;<br>
                )</code><br>
     */
    footer: PropTypes.any
};

export default Grid;