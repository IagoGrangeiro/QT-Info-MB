import React from "react";

const MyComponent = ({ title }: { title: string }) => {
    return (
        <div>Hello {title}</div>
    );
}

export default MyComponent;