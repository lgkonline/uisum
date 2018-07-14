import React from "react";
import Highlight from "react-highlight";

import { Page, Body, Header, HeaderTitle, MenuItem, Utilities, FluentBtn, ActionMenu, ActionMenuItem } from "../../../index.js";
import doc from "../data/doc.json";

/**
 * Documentation for all Components.
 * With markup templates and examples.
 */

class ReactComponentPage extends React.Component {
    constructor() {
        super();

        this.state = {
            components: doc,
            selectedComponent: null
        }
    }

    componentWillMount() {
        uiGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => {
            if (prevState.hash != uiGridRef.state.hash &&
                uiGridRef.state.match[0] == "react-component" && uiGridRef.state.hash != this.state.hash) {

                this.componentDidMount();
            }
        });
    }

    componentDidMount() {
        if (uiGridRef.state.match[1] && uiGridRef.state.match[1] != "") {
            this.setState({ selectedComponent: uiGridRef.state.match[1] });
        }
        else {
            this.setState({ selectedComponent: null });
        }
    }

    formatControlTitle(title) {
        const splitted = title.split("/");
        return splitted[splitted.length - 1].replace(".js", "");
    }

    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle}>
                        {this.state.selectedComponent ? <a href="#/react-component">{t("REACT_COMPONENTS")}</a> : t("REACT_COMPONENTS")}
                        {this.state.selectedComponent &&
                            <span> / {this.state.selectedComponent}</span>
                        }
                    </HeaderTitle>
                </Header>

                <Body containerClass="container">
                    {this.state.components && Object.keys(this.state.components).map(i =>
                        (!this.state.selectedComponent || this.state.selectedComponent == this.state.components[i].displayName) &&
                        this.state.components[i].props &&
                        <article key={i} id={"component-" + this.state.components[i].displayName}>
                            <h2 className="page-header">
                                <a href={"#/react-component/" + this.state.components[i].displayName}>#</a> {this.state.components[i].displayName}
                            </h2>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.state.components[i].description
                                }}
                            />

                            {this.state.components[i].example &&
                                <div>
                                    <h3 className="mt-4 mb-3">{t("EXAMPLE")}</h3>

                                    {React.createElement(
                                        require("../../../src/" + this.state.components[i].displayName).default,
                                        JSON.parse(this.state.components[i].example)[0],
                                        JSON.parse(this.state.components[i].example)[1]
                                    )}
                                </div>
                            }

                            {this.state.components[i].displayName == "Intro" &&
                                <p>
                                    <a href="#intro-demo">See a demo</a>
                                </p>
                            }

                            {this.state.components[i].props && (
                                <div>
                                    <h3 className="mt-4 mb-3">Props</h3>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.components[i].props && Object.keys(this.state.components[i].props).map(j =>
                                                <tr key={j}>
                                                    <th>{j}</th>
                                                    <td>
                                                        {this.state.components[i].props[j].description && <div dangerouslySetInnerHTML={{
                                                            __html: this.state.components[i].props[j].description
                                                                .replace(
                                                                    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
                                                                    (match) => {
                                                                        if (match.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                                                                            return '<a href="' + match + '" target="_blank"><img src="' + match + '"/></a>';
                                                                        }
                                                                        else {
                                                                            return '<a href="' + match + '" target="_blank">' + match + '</a>';
                                                                        }
                                                                    }
                                                                )
                                                        }} />}

                                                        {this.state.components[i].props[j].defaultValue ?
                                                            <div>
                                                                <strong>Default:</strong>
                                                                &nbsp;<code>{this.state.components[i].props[j].defaultValue.value == "this.defaultIcons" ?
                                                                    JSON.stringify(uiGridRef.defaultIcons)
                                                                    : this.state.components[i].props[j].defaultValue.value}</code>
                                                            </div>
                                                            : ""
                                                        }
                                                    </td>
                                                    <td>
                                                        {this.state.components[i].props[j].type && this.state.components[i].props[j].type.name}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </article>
                    )}
                </Body>
            </Page>
        );
    }
}

export default ReactComponentPage;