import React from "react";
import PropTypes from "prop-types";

/**
 * Enthält den Inhalt einer Seite.
 */
class Body extends React.Component {
    static get defaultProps() {
        return {
            className: "",
            containerClass: "container-fluid"
        };
    }

    render() {
        return (
            <div id={this.props.id}
                className={"ui-page " + this.props.className}
                onClick={this.props.onClick}
            >
                <div className={this.props.containerClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,

    /**
     * Setzt die Klasse für den Container. Mehr Infos unter https://getbootstrap.com/docs/4.0/layout/overview/#containers
     */
    containerClass: PropTypes.string
};

export default Body;