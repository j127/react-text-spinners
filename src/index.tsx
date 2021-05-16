import * as React from "react";

import "./index.scss";

type SpinnerProps = {
    theme?:
        | "arrow"
        | "bar"
        | "bar2"
        | "beam"
        | "box-bounce"
        | "bullet"
        | "bullseye"
        | "circle"
        | "countdown"
        | "dots"
        | "dots2"
        | "dots3"
        | "earth"
        | "fish"
        | "hamburger"
        | "hearts"
        | "lifting"
        | "line"
        | "line2"
        | "matrix"
        | "monkey"
        | "moon"
        | "open-circle"
        | "plus"
        | "rhomb"
        | "runner"
        | "square"
        | "star"
        | "time"
        | "toggle"
        | "triangle"
        | "triangles"
        | ""; // an empty string produces 3 horizontal dots
    size?: string;
    color?: string;
    backgroundColor?: string;
    title?: string;
    className?: string;
    key?: any;
};

/**
 * Add a spinner.
 *
 * Available themes will auto-complete in the editor if you have auto-completion
 * enabled.
 *
 * See the docs for more information:
 * https://github.com/maxbeier/text-spinners
 */
export default function Spinner({
    theme = "",
    size = "2rem",
    color = "#888",
    backgroundColor = "white",
    title = "Loading...",
}: SpinnerProps): JSX.Element {
    const styles = {
        color,
        backgroundColor,
        fontSize: size,
    };

    return (
        <div
            className={`spinner loading ${theme}`}
            style={styles}
            title={title}
        ></div>
    );
}
