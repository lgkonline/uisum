import React from "react";
import { Page, Body, Header, HeaderTitle, ActionMenu, ActionMenuItem, Search, FluentBtn, Utilities } from "../../../index.js";

class HomePage extends React.Component {
    componentDidMount() {
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <Page>
                <Header>
                    <HeaderTitle logo={window.logo} appTitle={window.appTitle}>
                        Start
                    </HeaderTitle>
                </Header>

                <Body containerClass="no-container">
                    <div className="home-jumbotron jumbotron jumbotron-fluid">
                        <div className="container text-center">
                            <img src={window.logo} className="logo-img" />

                            <h1 className="display-2"><span className="logo">{window.appTitle}</span></h1>

                            <h4 className="text-muted">{version}</h4>
                        </div>
                    </div>

                    <div className="container text-center">
                        <p className="lead">
                            {t("ORANGE_UI_DESCRIPTION")}
                        </p>

                        <p className="lead">
                            <code>npm i -S {packageName}</code>
                        </p>

                        <FluentBtn href="https://lgk.io/site/#/dev" className="btn btn-outline-primary btn-lg mt-4">
                            {t("LGK_DEV_OVERVIEW")}
                        </FluentBtn>

                        <div className="text-center display-4 mt-5 lgk-logo">
                            <a href="https://lgk.io">
                                <span className="icon-lgk-filled" />
                            </a>
                        </div>
                    </div>
                </Body>
            </Page>
        );
    }
}

export default HomePage;