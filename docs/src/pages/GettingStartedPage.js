import React from "react";
import Highlight from "react-highlight";

import { Page, Body, Header, HeaderTitle, MenuItem, Utilities, FluentBtn, ActionMenu, ActionMenuItem } from "../../../index.dev.js";

import scssVariables from "../data/scss-variables.json";

/**
 * Markup templates and examples.
 */

class GettingStartedPage extends React.Component {
    static get defaultProps() {
        return {
            title: "Getting Started",
            path: "/getting-started"
        };
    }

    render() {
        const sections = [
            {
                title: [
                    <img key={0} src={require("../images/visual-studio-code-seeklogo.com.svg")} style={{ width: "1em" }} />,
                    <span key={1}> Visual Studio Code Extension</span>
                ],
                body: (
                    <div>
                        <p>
                            {t("VS_CODE_EXTENSION_TEXT")}
                        </p>
                        <FluentBtn className="btn btn-outline-primary" href="https://marketplace.visualstudio.com/items?itemName=lgk.uisum-snippets">
                            <span className="icon-download" /> Download
                        </FluentBtn>
                    </div>
                )
            },
            {
                title: t("STARTER_PROJECT"),
                body: (
                    <div>
                        <FluentBtn className="btn btn-outline-primary" href={`https://github.com/lgkonline/${packageName}-starter`}>
                            <span className="icon-github" /> {t("STARTER_PROJECT_TEXT")}
                        </FluentBtn>
                    </div>
                )
            },
            {
                title: "Bootstrap",
                body: (
                    <div>
                        {t("BOOTSTRAP_LEAD")}<br />
                        <a href="#/bootstrap-demo">Bootstrap Demo</a> - <a href="https://getbootstrap.com/docs/">{t("OFFICAL_BOOTSTRAP_DOCU")}</a>
                    </div>
                )
            },
            {
                title: t("MARKUP_TEMPLATE"),
                body: (
                    <div>
                        <Highlight className="html">{
                            `<Grid>
    <SidebarMenu>
        <MenuItem href="#/home" icon="icon-home" label="Start" />
        ...
    </SidebarMenu>

    <Page>
        <Header>
            <HeaderTitle>
                ...
            </HeaderTitle>

            <HeaderActions>
                <ActionMenu>
                    <ActionMenuItem icon="icon-office" label="Click me and nothing will happen" />
                    ...
                </ActionMenu>
            </HeaderActions>
        </Header>

        <Body>
            ...
        </Body>
    </Page>
</Grid>`
                        }</Highlight>
                    </div>
                )
            },

            {
                title: t("IMPLEMENTATION"),
                body: (
                    <div>
                        <h2>Root (index.js)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { render } from "react-dom";

// Imports components for Grid and Menu items
import { Grid, SidebarMenu, MenuItem } from "${packageName}";

// Import of a page
import HomePage from "./HomePage.js";

// Import of CSS
import "./main.scss";

class App extends React.Component {
    render() {
        return (
            <Grid
                pages={[
                    /* Registers pages */
                    {
                        name: "home",
                        component: <HomePage />
                    }
                ]}
            >
                <SidebarMenu>
                    <MenuItem href="#/home" icon="icon-home" label="Home" isHome />
                </SidebarMenu>
            </Grid>
        );
    }
}

render(<App />, document.getElementById("app"));`
                        }</Highlight>

                        <h2>Page (HomePage.js)</h2>
                        <Highlight className="js">{
                            `import React from "react";
import { Page, Body, Header, HeaderTitle, HeaderActions, ActionMenu, ActionMenuItem } from "${packageName}";

class BootstrapDemoPage extends React.Component {
    render() {
        return (
            <Page>
                ...
            </Page>
        );
    }
}

export default BootstrapDemoPage;`
                        }</Highlight>

                        <h2>CSS (main.scss)</h2>
                        <Highlight className="css">{
                            `
$primary: #4dadf7; /* primary color */
$theme: #343a40; /* Theme color. By default it is $primary. */

/*
Nice to know: $theme will be inside of Bootstrap's $theme-colors-Map.
So you can also use classes like .text-theme and .bg-theme.
*/

/* Here you can set more Bootstrap variables to customize it. Use http://go.lgk.io/bootstrap to see all of them. */

/* Stylesheet for Orange UI. Bootstrap 4 is already included. */
@import "~${packageName}/dist/style.scss";
`
                        }</Highlight>
                    </div>
                )
            },
            {
                title: t("SCSS_VARIABLES"),
                body: (
                    <div>
                        <p>{t("SCSS_VARIABLES_DESC")}</p>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Default value</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                {scssVariables.map((sc, key) =>
                                    <tr key={key}>
                                        <td><code>{sc.variable}</code></td>
                                        <td><code>{sc.value}</code></td>
                                        <td>{sc.description}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )
            }
        ];

        return (
            <Page>
                <Header>
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle}>
                        {t("GETTING_STARTED")}
                    </HeaderTitle>
                </Header>

                <Body containerClass="container">
                    {sections.map((s, i) =>
                        <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                            <h1 className="page-header">{s.title}</h1>
                            {s.body}
                        </article>
                    )}
                </Body>
            </Page>
        );
    }
}

export default GettingStartedPage;