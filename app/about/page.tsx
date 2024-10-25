import { Fragment } from "react";
import cssStyle from "./about.module.css"
console.log(cssStyle,"css-Style");

import { log } from "console";
const AboutPage = () => {
    return <h1 className="{cssStyle.about" >AboutPage</h1>
};
export default AboutPage;