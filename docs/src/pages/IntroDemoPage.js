import React from "react";
import PropTypes from "prop-types";
import { Intro, FluentBtn } from "../../../index.js";

class IntroDemoPage extends React.Component {
    render() {
        return (
            <Intro logo={"https://lib.lgkonline.com/favicon.png"} title="Hier kann eine Begrüßung stehen">
                <form
                    className="form-horizontal"
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.history.push("/-react");
                    }}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Bitte anmelden</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" placeholder="Etwas eingeben" />
                        </div>
                    </div>

                    <div className="text-center">
                        <FluentBtn type="submit" className="btn btn-primary btn-lg">
                            Anmelden
                        </FluentBtn>
                    </div>
                </form>
            </Intro>
        );
    }
}

IntroDemoPage.propTypes = {
    history: PropTypes.object
};

export default IntroDemoPage;