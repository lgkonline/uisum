import React from "react";
import { FluentBtn, Utilities } from "../../../index.dev.js";

class FluentBtnExample extends React.Component {
    componentDidMount() {
        // On normal usage inside of <Page /> the following isn't necessary. You only need it when <FluentBtn /> gets embedded async.
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div>
                <FluentBtn
                    className="btn btn-primary btn-lg"
                >
                    Hover over this button and see the fancy fluent effect
                </FluentBtn>
            </div>
        );
    }
}

export default FluentBtnExample;