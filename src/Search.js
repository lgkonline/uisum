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
            reset: false,
            value: "",
            onChange: (event) => { },
            onSubmit: (event) => { },
            placeholder: "",
            autoFocus: false
        };
    }

    componentWillMount() {
        this.setState({ value: this.props.value });
    }

    toggleSidebar() {
        // if (this.props.sidebar) {
        //     document.dispatchEvent(window.toggleSidebarEvent);
        // }

        uiGridRef.setState({ sidebarIn: !uiGridRef.state.sidebarIn });
    }

    render() {
        return (
            <form
                className={"ui-search" + (this.props.body ? " ui-search-body" : "") + (this.state.focus ? " focus" : "")}
                onSubmit={event => {
                    event.preventDefault();
                    uiGridRef.setState({ sidebarIn: false });
                    this.props.onSubmit(event);
                }}
            >
                <div className="ui-search-input-group input-group">
                    <div
                        className="input-group-prepend"
                        onClick={() => document.getElementById(this.SearchControlId).focus()}
                    >
                        <span className="input-group-text">
                            <span className={uiGridRef.state.icons.search} />
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
                                <span className={uiGridRef.state.icons.cancel} style={{ fontSize: "1rem" }} />
                            </FluentBtn>
                        </div>
                    }
                </div>


                {this.props.sidebar &&
                    <MenuItem
                        href="javascript:void(0)"
                        className="ui-search-btn"
                        ballClassName="ui-sidebar-exception"
                        icon={uiGridRef.state.icons.search + " ui-search-btn-icon"}
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
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar: PropTypes.bool,

    /**
     * Wird Komponente im Body genutzt?
     */
    body: PropTypes.bool,

    /**
     * Erlaube Zurücksetzen?
     */
    reset: PropTypes.bool,

    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool
};

export default Search;