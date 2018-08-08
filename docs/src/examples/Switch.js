import React from "react";
import { Switch } from "../../../index.dev.js";

class SwitchExample extends React.Component {
    constructor() {
        super();

        this.state = {
            isChecked: true
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h4>Normal switch</h4>

                    <Switch
                        checked={this.state.isChecked}
                        onChange={() => this.setState({ isChecked: !this.state.isChecked })}
                    />
                </div>

                <div className="col-md-6">
                    <h4>Switch with a slider label</h4>

                    <Switch
                        className="lg"
                        checked={this.state.isChecked}
                        onChange={() => this.setState({ isChecked: !this.state.isChecked })}
                        sliderLabel={this.state.isChecked ? "🎉" : "😒"}
                    />
                </div>
            </div>
        );
    }
}

export default SwitchExample;