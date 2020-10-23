import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import youtube from "../assets/images/youtube.png"

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title} />

            <Content>

                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.f</p>

            </Content>

{/*
            <div >
                <img
                    style={{
                        width: 500,
                        height: 500,

                        float: "right",
                        padding: 20
                    }}
                    src={youtube} ></img>
            </div>
*/}


        </div>

    );
}

export default AboutPage