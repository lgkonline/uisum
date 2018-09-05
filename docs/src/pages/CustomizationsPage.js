import React from "react";
import { Page, Body, Header, HeaderTitle } from "../../../index.dev.js";

import scssVariables from "../data/scss-variables.json";

class CustomizationsPage extends React.Component {
    render() {
        const sections = [
            {
                title: t("SCSS_VARIABLES"),
                body: (
                    <div>
                        <p>{t("SCSS_VARIABLES_DESC")}</p>

                        <p><a href="http://go.lgk.io/bootstrap" target="_blank"><span className="icon-lgk-filled" /> Customize Bootstrap</a></p>

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
                        {t("CUSTOMIZATIONS")}
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

export default CustomizationsPage;