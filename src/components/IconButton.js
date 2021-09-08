import * as React from "react";
import { Button } from "react-bootstrap";

const IconButton = (name, style, to) => {
    return (
        <Button variant="link" href={to} target="_blank" size="lg">
            <i class={style}></i>
        </Button>
    );
};

export default IconButton;
