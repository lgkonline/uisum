import React from "react";
import { LgkPillComponent } from "lgk";

import { Grid, SidebarMenu, MenuItem, Search } from "../../../index.js";
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