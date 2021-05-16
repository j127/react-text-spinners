# react-text-spinners

This package wraps up [text-spinners](https://github.com/maxbeier/text-spinners) as an installable React component. View the examples [here](https://react-text-spinners.codeselfstudy.com/).

[![NPM](https://img.shields.io/npm/v/react-text-spinners.svg)](https://www.npmjs.com/package/react-text-spinners)

## Install

```bash
npm install --save react-text-spinners
```

To run the examples, clone this repo and run the following commands in your terminal:

```text
$ npm install
$ npm run examples
```

Then open `http://localhost:1234/` in a browser.

## Usage

```tsx
import React, { useEffect, useState } from "react";

import Spinner from "react-text-spinners";

export default function Example() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);

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

## License

MIT © [j127](https://github.com/j127)
