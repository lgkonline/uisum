import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";
import MenuItem from "./MenuItem";
import Grid from "./Grid";
import FluentBtn from "./FluentBtn";

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "",
            focus: false
        };

        this.SearchControlId = "ui-search-control-" + Utilities.guid();
    }

    static get defaultProps() {
        return {
            sidebar: false,
            body: false,
            actionMenu: false,
            reset: false,
            value: "",
            onChange: (event) => { },
            onSubmit: (event) => { },
            placeholder: "",
            autoFocus: false,
            className: ""
        };
    }

    componentWillMount() {
        this.setState({ value: this.props.value });
    }

    toggleSidebar() {
        // if (this.props.sidebar) {
        //     document.dispatchEvent(window.toggleSidebarEvent);
        // }

        window.uiGridRef.setState({ sidebarIn: !window.uiGridRef.state.sidebarIn });
    }

    render() {
        return (
            <form
                className={"ui-search" +
                    ((this.props.body || this.props.actionMenu) ? " ui-search-normalize" : "") +
                    (this.props.body ? " ui-search-body" : "") +
                    (this.props.actionMenu ? " ui-actions-menu-item" : "") +
                    (this.state.focus ? " focus" : "") +
                    (this.props.className ? " " + this.props.className : "")}
                onSubmit={event => {
                    event.preventDefault();
                    window.uiGridRef.setState({ sidebarIn: false });
                    this.props.onSubmit(event);
                }}
            >
                <div className="ui-search-input-group input-group">
                    <div
                        className="input-group-prepend"
                        onClick={() => document.getElementById(this.SearchControlId).focus()}
                    >
                        <span className="input-group-text">
                            <span className={window.uiGridRef && window.uiGridRef.state.icons.search} />
                        </span>
                    </div>
                    <input
                        type="search"
                        value={this.state.value}
                        onChange={event => {
                            this.setState({ value: event.target.value });
                            this.props.onChange(event);
                        }}
                        id={this.SearchControlId}
                        className="ui-search-control form-control default input-lg"
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        style={{
                            zIndex: (this.props.body ? "0" : "")
                        }}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                    />

                    {this.props.reset && this.state.value.length > 0 &&
                        <div className="input-group-append">
                            <FluentBtn
                                type="button"
                                className="btn btn-light btn-lg rounded-0"
                                onClick={() => {
                                    this.setState({ value: "" }, () => {
                                        document.getElementById(this.SearchControlId).focus();
                                    });
                                    this.props.onChange({
                                        target: {
                                            value: ""
                                        }
                                    });
                                }}
                            >
                                <span className={window.uiGridRef && window.uiGridRef.state.icons.cancel} style={{ fontSize: "1rem" }} />
                            </FluentBtn>
                        </div>
                    }
                </div>


                {this.props.sidebar &&
                    <MenuItem
                        href="javascript:void(0)"
                        className="ui-search-btn"
                        ballClassName="ui-sidebar-exception"
                        icon={(window.uiGridRef && window.uiGridRef.state.icons.search) + " ui-search-btn-icon"}
                        onClick={() => {
                            this.toggleSidebar();
                            setTimeout(() => {
                                document.querySelector(".ui-search-control").select();
                            }, 200);
                        }}
                    />
                }

            </form>
        );
    }
}

Search.propTypes = {
    /**
     * Is component in sidebar?
     */
    sidebar: PropTypes.bool,

    /**
     * Is component in body?
     */
    body: PropTypes.bool,

    /**
     * Is component in action menu?
     */
    actionMenu: PropTypes.bool,

    /**
     * Allow reset?
     */
    reset: PropTypes.bool,

    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    className: PropTypes.string
};

export default Search;