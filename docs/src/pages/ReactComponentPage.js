import React from "react";
import Highlight from "react-highlight";

import { Page, Body, Header, HeaderTitle, MenuItem, Utilities, FluentBtn, ActionMenu, ActionMenuItem } from "../../../index.dev.js";
import doc from "../data/doc.json";

import ReactComponent from "../components/ReactComponent";

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
                        <ReactComponent
                            key={i}
                            comp={this.state.components[i]}
                            standalone
                        />
                    )}
                </Body>
            </Page>
        );
    }
}

export default ReactComponentPage;