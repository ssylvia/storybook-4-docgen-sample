import React, { Component } from "react";
import { resolve } from "styled-jsx/css";
interface Props {
  /** The type of button */
  type: "primary" | "default";

  /** The click action */
  onClick?: () => void;
}

export class Button extends Component<Props> {
  buttonStyle = resolve`
    .button.primary {
        background-color: lightgreen;
    }
    .button.default {
        background-color: #fff;
        border: 1px solid lightblue;
    }
  `;

  render() {
    return (
      <button
        className={`button ${this.props.type} ${this.buttonStyle.className}`}
        type="button"
        onClick={this.props.onClick}
      >
        {this.props.children}
        {this.buttonStyle.styles}
        <style jsx>{`
          .button {
            border-radius: 0.5em;
            border: 0;
            cursor: pointer;
            padding: 1em;
          }
        `}</style>
      </button>
    );
  }
}

export default Button;
