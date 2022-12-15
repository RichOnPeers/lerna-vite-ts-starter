import React from "react";
export function Counter({ count, setCount }) {
    return (React.createElement("p", null,
        React.createElement("button", { onClick: () => setCount((count) => count + 1) },
            "count is: ",
            count)));
}
