import React from "react";
import { Link } from "react-router-dom";

import { Page, Body, Header, HeaderTitle } from "../../../index.dev.js";
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

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.component !== this.props.match.params.component) {
            this.componentDidMount();
        }
    }

    componentDidMount() {
        if (this.props.match.params.component && this.props.match.params.component != "") {
            this.setState({ selectedComponent: this.props.match.params.component });
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
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle} appRootHref="/" />
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