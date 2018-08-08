import React from "react";
import { Caret } from "../../../index.dev.js";

class CaretExample extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                >
                    <Caret
                        open={this.state.isOpen}
                    />
                    {" "}<span>See what happens when you click here</span>
                </button>
                {this.state.isOpen &&
                    <div className="bg-dark text-white p-2 my-2">
                        This is visible now!
                    </div>
                }
            </div>
        );
    }
}

export default CaretExample;