import React from "react";
import { Page, Body, Header, HeaderTitle, ActionMenu, ActionMenuItem, Utilities } from "../../../index.dev.js";

import doc from "../data/doc.json";
import docDoc from "../data/doc-doc.json";

class SearchResultsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            searchWord: "",
            results: null
        };

        window.addEventListener("hashchange", event => {
            this.componentWillMount();
        });
    }

    componentWillMount() {
        this.setState({ searchWord: uiGridRef.state.match[1] }, () => {
            this.search(this.state.searchWord);
        });
    }

    search(q = "") {
        q = q.toLowerCase();

        this.state.results = [];

        Object.keys(doc).map(k => {
            const displayName = doc[k].displayName.toLowerCase();
            const description = doc[k].description.toLowerCase();

            if (doc[k].props && displayName.indexOf(q) > -1 || description.indexOf(q) > -1) {
                this.state.results.push({
                    to: "/react-component/" + doc[k].displayName,
                    title: "React Komponente: " + doc[k].displayName,
                    description: doc[k].description
                });
            }
        });

        Object.keys(docDoc).map(k => {
            if (k.toLowerCase().indexOf(q) > -1 || docDoc[k].description.toLowerCase().indexOf(q) > -1) {
                if (docDoc[k].props && docDoc[k].props.path) {
                    this.state.results.push({
                        to: docDoc[k].props.path.defaultValue.value.replace(/"/g, ""),
                        title: docDoc[k].props.title.defaultValue.value.replace(/"/g, ""),
                        description: docDoc[k].description
                    });
                }
            }
        });

        this.setState({ results: this.state.results }, () => Utilities.registerFluentBtns());
    }

    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle}>
                        {t("SEARCH2")}: "{this.state.searchWord}"
                    </HeaderTitle>
                </Header>

                <Body containerClass="container">
                    {this.state.results &&
                        <div>
                            <div className="list-group" style={{ marginTop: "2rem" }}>
                                {this.state.results.map((r, i) =>
                                    <a
                                        key={i}
                                        className="list-group-item list-group-item-action fluent-btn light"
                                        href={"#" + r.to}
                                    >
                                        <div className="fluent-btn-ball" />
                                        <h4 className="list-group-item-heading">{r.title}</h4>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: r.description
                                            }}
                                        />
                                    </a>
                                )}
                            </div>

                            {this.state.results.length == 0 &&
                                <h1 className="text-center">Keine Ergebnisse gefunden</h1>
                            }
                        </div>
                    }
                </Body>
            </Page >
        );
    }
}

export default SearchResultsPage;