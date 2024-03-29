# react-text-spinners

This package wraps up [text-spinners](https://github.com/maxbeier/text-spinners) as an installable React component. View the examples [here](https://react-text-spinners.codeselfstudy.com/).

[![NPM](https://img.shields.io/npm/v/react-text-spinners.svg)](https://www.npmjs.com/package/react-text-spinners)

Version 2 uses a peer dependency of React 17 instead of React 16.

Version 3 uses a peer dependency of React 18 instead of React 17.

## Install

```bash
npm install --save react-text-spinners
```

## Usage

```tsx
import React, { value useEffect, value useState } from "react";

import Spinner from "react-text-spinners";

export default function Example() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // this simulates the time it takes to make a web request
        setTimeout(() => {
            setMessage("hello world");
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div>{isLoading ? <Spinner theme="dots2" /> : <p>{message}</p>}</div>
    );
}
```

You can customize the output with additional props:

```tsx
<Spinner theme="dots2" color="teal" size="5rem" title="Alternate hover text" />
```

## Examples

To run [the examples](https://react-text-spinners.codeselfstudy.com/) locally, clone this repo and run the following commands in your terminal:

```text
$ npm install
$ npm run examples:serve
```

Then open `http://localhost:1234/` in a browser.

## License

MIT © [j127](https://github.com/j127)
