import React from "react";
import Spinner from "../src/index";
import { chunk } from "lodash";

// See https://steveholgado.com/typescript-types-from-arrays/
const themeNames = [
    "",
    "arrow",
    "bar",
    "bar2",
    "beam",
    "box-bounce",
    "bullet",
    "bullseye",
    "circle",
    "countdown",
    "dots",
    "dots2",
    "dots3",
    "earth",
    "fish",
    "hamburger",
    "hearts",
    "lifting",
    "line",
    "line2",
    "matrix",
    "monkey",
    "moon",
    "open-circle",
    "plus",
    "rhomb",
    "runner",
    "square",
    "star",
    "time",
    "toggle",
    "triangle",
    "triangles",
] as const;

type Theme = typeof themeNames[number];

type ThemedSpinnerProps = {
    theme: Theme;
};

/**
 * Renders a spinner along with the code that generates it.
 */
function ThemedSpinner({ theme }: ThemedSpinnerProps): JSX.Element {
    const themeString = theme === "" ? "" : `theme="${theme}" `;
    const codeString = `<Spinner ${themeString}/>`;

    return (
        <div className="box">
            <h3 className="title is=5">{theme === "" ? "default" : theme}</h3>
            <Spinner theme={theme} />
            <div className="code-block">
                <code>{codeString}</code>
            </div>
        </div>
    );
}

type RowProps = {
    themes: Theme[];
};

function Row({ themes }: RowProps): JSX.Element {
    console.log("themes", themes);
    return (
        <div className="columns">
            {themes.map((t: Theme) => {
                return (
                    <div className="column" key={t}>
                        <ThemedSpinner theme={t} />
                    </div>
                );
            })}
        </div>
    );
}

/**
 * The App.
 */
export default function App() {
    const numberOfColumns = 3;

    const themes: Theme[][] = chunk(themeNames, numberOfColumns);

    return (
        <div>
            {themes.map((themeRow: Theme[], idx) => (
                <Row themes={themeRow} key={idx} />
            ))}
        </div>
    );
}
