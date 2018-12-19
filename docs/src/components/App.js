import React from "react";
import { LgkPillComponent } from "lgk";
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

import { Grid, SidebarMenu, MenuItem, Search, Tabs, PageWrapper } from "../../../index.dev.js";
import Translation from "../Translation";

import HomePage from "../pages/HomePage";
import GettingStartedPage from "../pages/GettingStartedPage";
import CustomizationsPage from "../pages/CustomizationsPage";
import UtilitiesPage from "../pages/UtilitiesPage";
import ReactComponentPage from "../pages/ReactComponentPage";
import BootstrapDemoPage from "../pages/BootstrapDemoPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import IntroDemoPage from "../pages/IntroDemoPage";

window.packageName = "uisum";
window.appTitle = "Uisum";
window.version = require("../../../package.json").version;
window.logo = "/" + require("../images/uisum logo.svg");
window.t = Translation.getPhrase;

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: ""
        };
    }

    render() {
        return (
            <Router>
                <Grid expandSidebar>
                    <SidebarMenu>
                        <Search
                            sidebar
                            reset
                            value={this.state.searchInput}
                            onChange={({ target }) => {
                                this.setState({ searchInput: target.value });
                            }}
                            onSubmit={() => {
                                console.log("submit");
                                console.log(history);

                                location.href = "/search/" + this.state.searchInput;
                            }}
                            placeholder={t("SEARCH")}
                        />

                        <NavLink
                            to="/home"
                            className="ui-toggle-page ui-sidebar-btn btn ui-sidebar-btn-stacked"
                        >
                            <span className="icon-home ui-sidebar-icon" />
                            <span className="ui-sidebar-label">Start</span>
                        </NavLink>
                        <NavLink
                            to="/getting-started"
                            className="ui-toggle-page ui-sidebar-btn btn ui-sidebar-btn-stacked"
                        >
                            <span className="icon-flag ui-sidebar-icon" />
                            <span className="ui-sidebar-label">{t("GETTING_STARTED")}</span>
                        </NavLink>
                        <NavLink
                            to="/customizations"
                            className="ui-toggle-page ui-sidebar-btn btn ui-sidebar-btn-stacked"
                        >
                            <span className="icon-paint-format ui-sidebar-icon" />
                            <span className="ui-sidebar-label">{t("CUSTOMIZATIONS")}</span>
                        </NavLink>
                        <NavLink
                            to="/utilities"
                            className="ui-toggle-page ui-sidebar-btn btn ui-sidebar-btn-stacked"
                        >
                            <span className="icon-embed ui-sidebar-icon" />
                            <span className="ui-sidebar-label">Utilities</span>
                        </NavLink>
                        <NavLink
                            to="/react-component"
                            className="ui-toggle-page ui-sidebar-btn btn ui-sidebar-btn-stacked"
                        >
                            <span className="icon-book ui-sidebar-icon" />
                            <span className="ui-sidebar-label">{t("REACT_COMPONENTS")}</span>
                        </NavLink>
                    </SidebarMenu>

                    <LgkPillComponent />

                    <PageWrapper>
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/getting-started" component={GettingStartedPage} />
                        <Route path="/customizations" component={CustomizationsPage} />
                        <Route path="/utilities" component={UtilitiesPage} />
                        <Route path="/react-component/:component?" component={ReactComponentPage} />
                        <Route path="/search/:searchWord" component={SearchResultsPage} />
                        <Route path="/intro-demo" component={IntroDemoPage} />
                        <Route path="/bootstrap-demo" component={BootstrapDemoPage} />

                        <footer className="bg-light ml-sidebar-width p-3 text-center">
                            Made with <span className="icon-heart text-danger" /> in Germany by LGK. Checkout <a href="https://lgk.io">my website</a> or follow me on <a href="https://twitter.com/lgkonline">Twitter</a>.<br />
                            The font HK Grotesk by Hanken Design Co is <a href="https://www.fontsquirrel.com/license/hk-grotesk">SIL licensed</a>. It is only used for the docs and is not part of Uisum.<br />
                            The code is <a href="https://github.com/lgkonline/uisum/blob/master/LICENSE">MIT licensed</a>.<br />
                            <a className="btn btn-link" href="https://github.com/lgkonline/uisum">Uisum on GitHub</a>
                        </footer>
                    </PageWrapper>
                </Grid>
            </Router>
        );
    }
}

export default App;