import React from "react";
import PropTypes from "prop-types";
import Utilities from "./Utilities";

/**
 * Geeignet als Login-Bildschirm.
 */

class Intro extends React.Component {
    static get defaultProps() {
        return {
            screenClass: "",
            containerClass: ""
        };
    }

    componentDidMount() {
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div className={"sign-in-screen " + this.props.screenClass}>
                <div className={"sign-in-container mx-1 " + this.props.containerClass}>
                    <div className="jumbotron">
                        <div className="text-center">
                            <img style={{ maxWidth: "100px" }} src={this.props.logo} />
                            <h2 className="mt-4 mb-3">{this.props.title}</h2>
                        </div>

                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Intro.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: PropTypes.string,

    /**
     * Der Text, der unter dem Logo erscheint
     */
    title: PropTypes.string,

    /**
     * Will extend <code>.sign-in-screen</code>.
     */
    screenClass: PropTypes.string,

    /**
     * Will extend <code>.sign-in-container</code>.
     */
    containerClass: PropTypes.string,

    /**
     * Content
     */
    children: PropTypes.any
};

export default Intro;