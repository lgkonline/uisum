import React from "react";
import Title from "./HeaderTitle.js";
import Actions from "./HeaderActions.js";
import Utilities from "./Utilities";

class Header extends React.Component {
    render() {
        return (
            <div className="ui-header ui-header-extension">
                <div className="ui-header-wrapper" onClick={() => Utilities.scrollToTop()} />

                {this.props.children}
            </div>
        );
    }
}

Header.Title = Title;
Header.Actions = Actions;

export default Header;