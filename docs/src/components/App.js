import React from "react";
import { LgkPillComponent } from "lgk";

import { Grid, SidebarMenu, MenuItem, Search } from "../../../index.dev.js";
import Translation from "../Translation";

import HomePage from "../pages/HomePage";
import GettingStartedPage from "../pages/GettingStartedPage";
import UtilitiesPage from "../pages/UtilitiesPage";
import ReactComponentPage from "../pages/ReactComponentPage";
import BootstrapDemoPage from "../pages/BootstrapDemoPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import IntroDemoPage from "../pages/IntroDemoPage";

window.packageName = "uisum";
window.appTitle = "Uisum";
window.version = require("../../../package.json").version;
window.logo = require("../images/uisum logo.svg");
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
            <Grid
                expandSidebar
                expandSidebarToggleable
                pages={[
                    {
                        name: "home",
                        component: <HomePage />
                    },
                    {
                        name: "getting-started",
                        component: <GettingStartedPage />
                    },
                    {
                        name: "utilities",
                        component: <UtilitiesPage />
                    },
                    {
                        name: "react-component",
                        component: <ReactComponentPage />
                    },
                    {
                        name: "search",
                        component: <SearchResultsPage />
                    },
                    {
                        name: "intro-demo",
                        component: <IntroDemoPage />
                    },
                    {
                        name: "bootstrap-demo",
                        component: <BootstrapDemoPage />
                    }
                ]}
                footer={(
                    <footer className="bg-light ml-sidebar-width p-3 text-center">
                        Made with <span className="icon-heart text-danger" /> in Germany by LGK. Checkout <a href="https://lgk.io">my website</a> or follow me on <a href="https://twitter.com/lgkonline">Twitter</a>.<br />
                        The font HK Grotesk by Hanken Design Co is <a href="https://www.fontsquirrel.com/license/hk-grotesk">SIL licensed</a>. It is only used for the docs and is not part of Uisum.<br />
                        The code is <a href="https://github.com/lgkonline/uisum/blob/master/LICENSE">MIT licensed</a>.<br />
                        <a className="btn btn-link" href="https://github.com/lgkonline/uisum">Uisum on GitHub</a>
                    </footer>
                )}
            >
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

                            location.hash = "#/search/" + this.state.searchInput;
                        }}
                        placeholder={t("SEARCH")}
                    />

                    <MenuItem href="#/home" icon="icon-home" label="Start" isHome />
                    <MenuItem href="#/getting-started" icon="icon-flag" label={t("GETTING_STARTED")} />
                    <MenuItem href="#/utilities" icon="icon-embed" label="Utilities" />
                    <MenuItem href="#/react-component" icon="icon-book" label={t("REACT_COMPONENTS")} />
                </SidebarMenu>

                <LgkPillComponent />
            </Grid>
        );
    }
}

export default App;