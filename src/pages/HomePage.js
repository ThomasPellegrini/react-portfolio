import React from "react";

import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Particles from "react-particles-js";

function HomePage(props){

    return(
        <div>
            <Hero
            title={props.title}
            subTitle={props.subTitle}
            text={props.text}
            />
            <Carousel>

            </Carousel>
            <Particles/>
        </div>

    );
}

export default HomePage