import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import SkillBar from 'react-skillbars';

import cloud from "../assets/cloud.pdf"

function AboutPage(props){

    const skills = [
        {
            "type": "Python",
            "level": 80

        },
        {
            "type": "C++",
            "level": 50
        },
        {
            "type": "Docker",
            "level": 45
        },
        {
            "type": "Java",
            "level": 40
        },
        {
            "type": "Javascript",
            "level": 25
        }
    ]
    const colors = {
        "bar": "#09d6e8",
        "title": {
            "hue":  9,
            "text": "#fff",
            "background": "#2795e3",
            "saturation": 20
        }
    }

    return(
        <div >
            <Hero title={props.title} />

            <Content>

                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.</p>
                <p>This is the part where i talk about me blablabla. This is the part where i talk about me blablabla.f</p>
                <div className={'skill'}>
                    <SkillBar   skills={skills} height={40} colors={colors}/>
                </div>
                <a href={cloud} target={"_blank"}>
                    <button className={"buttonDownload"} type="button" >Download CV</button>
                </a>
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