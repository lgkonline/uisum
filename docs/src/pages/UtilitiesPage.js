import React from "react";
import Highlight from "react-highlight";

import { Page, Body, Header, HeaderTitle, Utilities, FluentBtn } from "../../../index.js";

/**
 * A static class with some useful methods.
 */

class UtilitiesPage extends React.Component {
    static get defaultProps() {
        return {
            title: "Utilities",
            path: "/utilities"
        };
    }

    render() {
        const sections = [
            {
                title: "Utilities",
                body: (
                    <div>
                        <p>A static class with some useful methods.</p>

                        <h2 className="page-header">Beispiel</h2>
                        <Highlight className="js">{`import { Utilities } from "uisum";
                            
Utilities.startLoading();`}</Highlight>

                        <article>
                            <h2 className="page-header">Functions</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Definition</th>
                                        <th>Description</th>
                                        <th>Demo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><code>Utilities.hasClass(el, className)</code></td>
                                        <td>Prüft, ob Element Klasse besitzt</td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.addClass(el, className)</code></td>
                                        <td>Fügt Klasse zu Element hinzu</td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.removeClass(el, className)</code></td>
                                        <td>Entfernt Klasse vom Element</td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.toggleClass(el, className)</code></td>
                                        <td>Entfernt Klasse, wenn vorhanden. Ansonsten wird sie hinzugefügt.</td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.startLoading()</code></td>
                                        <td>Zeigt Lade-Animation</td>
                                        <td>
                                            <button type="button" className="btn btn-light" onClick={() => Utilities.startLoading()}>
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.finishLoading()</code></td>
                                        <td>Beendet Lade-Animation</td>
                                        <td>
                                            <button type="button" className="btn btn-light" onClick={() => Utilities.finishLoading()}>
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.showSuccess()</code></td>
                                        <td>Zeigt Erfolgs-Haken</td>
                                        <td>
                                            <button type="button" className="btn btn-light" onClick={() => Utilities.showSuccess()}>
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.hideSuccess()</code></td>
                                        <td>Versteckt Erfolgs-Haken</td>
                                        <td>
                                            <button type="button" className="btn btn-light" onClick={() => Utilities.hideSuccess()}>
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.toggleActions()</code></td>
                                        <td>Zeigt erweiterte Actions, bzw. versteckt diese</td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.setAlertMessage(message, alertClassName, close, detailText)</code></td>
                                        <td>
                                            Zeigt eine Meldung an.<br />
                                            Mögliche Werte für alertClassName: <code>loading</code>, <code>success</code>, <code>info</code>,
            <code>warning</code>, <code>danger</code>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-light"
                                                onClick={() => Utilities.setAlertMessage("Hey, dies ist eine Nachricht",
                                                    "danger", true, "Hier ist noch mehr Text.")}
                                            >
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>Utilities.resetAlertMessage(alertClassName)</code></td>
                                        <td>
                                            Setzt Meldung wieder zurück.
        </td>
                                        <td>
                                            <button type="button" className="btn btn-light"
                                                onClick={() => Utilities.resetAlertMessage("loading")}
                                            >
                                                <span className="icon-play" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>

                        <article>
                            <h2 className="page-header">Useful CSS classes</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Definition</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>.ui-sidebar-hidden-on-open</code></td>
                                        <td>
                                            Das Element wird versteckt solange die Sidebar geöffnet ist.
                                    </td>
                                    </tr>
                                    <tr>
                                        <td><code>.ui-sidebar-visible-on-open</code></td>
                                        <td>
                                            Das Element ist sichtbar solange die Sidebar geöffnet ist.
                                    </td>
                                    </tr>
                                    <tr>
                                        <td><code>.ui-header-form</code></td>
                                        <td>
                                            Nutzbar innerhalb von <code>{`<HeaderActions />`}</code> um in der Action-Leiste
                                        ein Formular einzubinden. Kombinierbar mit <code>.form-horizontal</code>.
                                    </td>
                                    </tr>
                                    <tr>
                                        <td><code>.form-horizontal</code></td>
                                        <td>
                                            Zusammen mit <a href="https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form">Bootstraps Lösung</a>
                                            &nbsp;zu nutzen. Durch <code>.form-horizontal</code> werden die Labels auf größeren Bildschirmen rechts angeordnet.
                                    </td>
                                    </tr>
                                    <tr>
                                        <td><code>.form-control.default</code></td>
                                        <td>
                                            Stellt das Standard-Styling von Bootstrap wieder her.
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                )
            }
        ];

        return (
            <Page>
                <Header>
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle}>
                        Utilities
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

export default UtilitiesPage;