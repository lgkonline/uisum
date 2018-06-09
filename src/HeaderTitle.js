import React from "react";
import PropTypes from "prop-types";

/**
 * Der Titel-Bereich in der Kopf-Leiste.
 */
class HeaderTitle extends React.Component {
    static get defaultProps() {
        return {
            keepAppTitle: false
        };
    }

    render() {
        return (
            <h3 className="ui-header-logo">
                <span className="ui-header-logo-title">
                    {/* Only shows logo when it is set */}
                    {this.props.logo ? <span><a href="#"><img src={this.props.logo} className="ui-header-logo-image" /></a>&nbsp;</span> : ""}

                    {/* If keepAppTitle is set, the title will stay visible even on smaller screens */}
                    <span className={"ui-header-logo-title-labels " + (this.props.keepAppTitle ? "keep" : "")}>
                        {this.props.appTitle ? <span><a href="#">{this.props.appTitle}</a> {(this.props.children ? "/" : "")}&nbsp;</span> : ""}

                        {/* Set children as they are */}
                        {this.props.children}
                    </span>
                </span>
            </h3>
        );
    }
}

HeaderTitle.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: PropTypes.string,

    /**
     * Der Text, der neben dem Logo steht.
     */
    appTitle: PropTypes.string,

    /**
     * Deaktiviert, dass der App-Titel bei bestimmer Bildschirmgröße ausgeblendet wird.
     */
    keepAppTitle: PropTypes.bool
};

export default HeaderTitle;