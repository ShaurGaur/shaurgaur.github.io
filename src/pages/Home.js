import * as React from "react";
import BGimg from "./jaipur-bg.jpg";
import { Image } from "react-bootstrap";

const Home = () => {
    const homeStyle = {
        backgroundImage: `$url(${BGimg})`,
    };

    return <Image src={BGimg} fluid />;
};

export default Home;
