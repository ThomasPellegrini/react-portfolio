import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import SkillBar from 'react-skillbars';
import Button from 'react-bootstrap/Button'
import cv from "../assets/cv.pdf"

function AboutPage(props){

/*    const skills = [
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
    ]*/
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

                <p>From the moment I produced "Hello World" in the console of my application, I knew I was hooked into the world of software development. </p>
                <p>But software development has never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software.</p>
                <p>What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting  as the years go by.</p>
                <p>           </p>


                {/*
                <div className={'skill'}>
                    <SkillBar   skills={skills} height={40} colors={colors}/>
                </div>*/}


                <a href={cv} target={"_blank"}>
                    <Button  type="button" className={"d-inline-block"}
                            variant={"primary"} >Check my CV</Button>
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