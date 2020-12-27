import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "../assets/images/background.jpg";
import Particles from "react-particles-js";
import {
    faLinkedin,
    faGithub,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="social-container">

            <a href="https://it.linkedin.com/in/thomas-pellegrini-4ba9a5174?trk=people-guest_people_search-card" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </a>
            <a href="https://www.github.com/ThomasPellegrini" className="github social">
                <FontAwesomeIcon icon={faGithub} size="5x" />
            </a>
            <a href="mailto:pellegrinithomas1@gmail.com" className="github social">
                <FontAwesomeIcon icon={faGoogle} size="5x" color={"#dd4b39"}/>
            </a>

{/*
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                style={{
                    width: '100%',
                    backgroundImage: `url(${Background})`
                }}
            />
*/}

        </div>
    );
}