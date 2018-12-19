import React from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";
import { Link } from "react-router-dom";

class ReactComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            exampleComponent: null
        };
    }

    componentWillMount() {
        try {
            const exampleComponent = require(`../examples/${this.props.comp.displayName}.js`);
            // console.log(exampleComponent);
            this.setState({ exampleComponent: exampleComponent["default"] });
        }
        catch (ex) {
            // console.error(ex);
            // This component has no example
        }
    }

    render() {
        return (
            <article>
                <h2 className="page-header">
                    <Link to={"/react-component/" + this.props.comp.displayName}>#</Link> {this.props.comp.displayName}
                </h2>

                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.comp.description
                    }}
                />

                {this.props.comp.example &&
                    <div>
                        <h3 className="mt-4 mb-3">{t("EXAMPLE")}</h3>

                        {React.createElement(
                            require("../../../src/" + this.props.comp.displayName).default,
                            JSON.parse(this.props.comp.example)[0],
                            JSON.parse(this.props.comp.example)[1]
                        )}
                    </div>
                }

                {this.props.comp.displayName == "Intro" &&
                    <p>
                        <a href="#intro-demo">See a demo</a>
                    </p>
                }

                {this.props.comp.props && (
                    <div>
                        <h3 className="mt-4 mb-3">Props</h3>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.comp.props && Object.keys(this.props.comp.props).map(j =>
                                    <tr key={j}>
                                        <th>{j}</th>
                                        <td>
                                            {this.props.comp.props[j].description && <div dangerouslySetInnerHTML={{
                                                __html: this.props.comp.props[j].description
                                                    .replace(
                                                        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
                                                        (match) => {
                                                            if (match.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                                                                return '<a href="' + match + '" target="_blank"><img src="' + match + '"/></a>';
                                                            }
                                                            else {
                                                                return '<a href="' + match + '" target="_blank">' + match + '</a>';
                                                            }
                                                        }
                                                    )
                                            }} />}

                                            {this.props.comp.props[j].defaultValue ?
                                                <div>
                                                    <strong>Default:</strong>
                                                    &nbsp;<code>{this.props.comp.props[j].defaultValue.value == "this.defaultIcons" ?
                                                        JSON.stringify(uiGridRef.defaultIcons)
                                                        : this.props.comp.props[j].defaultValue.value}</code>
                                                </div>
                                                : ""
                                            }
                                        </td>
                                        <td>
                                            {this.props.comp.props[j].type && this.props.comp.props[j].type.name}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {(this.state.exampleComponent || this.props.comp.exampleCode) &&
                            (
                                this.props.standalone ?
                                    <div>
                                        <h2 className="mt-4 mb-3">{t("EXAMPLE")}</h2>

                                        {this.state.exampleComponent &&
                                            <div className="mb-3"><this.state.exampleComponent /></div>
                                        }

                                        {this.props.comp.exampleCode &&
                                            <Highlight className="jsx">{this.props.comp.exampleCode}</Highlight>
                                        }
                                    </div>
                                    :
                                    <Link to={"/react-component/" + this.props.comp.displayName}>{t("SHOW_EXAMPLE")}</Link>
                            )
                        }
                    </div>
                )}
            </article>
        );
    }
}

ReactComponent.propTypes = {
    comp: PropTypes.object,
    standalone: PropTypes.bool
};

export default ReactComponent;