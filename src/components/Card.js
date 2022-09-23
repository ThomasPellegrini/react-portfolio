// import React from "react";
import React, { useState, useRef } from 'react';
import CardInfo from "../components/CardInfo";
import { useSpring, animated } from 'react-spring';
import iot from "../assets/images/iot.jpg";
import react_native from "../assets/images/react_native.jpg";
import pa from "../assets/images/python_android.jpg";
import js from "../assets/images/js.png";
import react_image from "../assets/images/react.svg"
import iot_image from "../assets/images/iot.svg"
import discord from "../assets/images/discord.svg"
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Card(props){

    const [isRotated, setIsRotated] = React.useState(false);

    const onRotate = () => setIsRotated((rotated) => !rotated);

    return(
        <Hero>
            <div className="container">
                <Info />
                <div className="row">
                    {cards.map((card, i) => (

                            <div className="column" >
                                <Card1 >

                                    {/*title={props.item.title}*/}
                                    {/*subTitle={props.item.subTitle}*/}
                                    {/*link={props.item.link}*/}

                                    <div className="card-title">{card.title}</div>
                                    <div className="card-body">{card.subTitle}</div>
                                    <Image ratio={card.imageRatio} src={card.image} />

                                    <a href={card.link}>
                                        <div className="card-body">Github repository
                                        <FontAwesomeIcon icon={faGithub} size="2x" /></div>
                                    </a>


                                </Card1>
                            </div>



                    ))}
                </div>
             </div>
        </Hero>


    );
}




function Card1({ children }) {
    // We add this ref to card element and use in onMouseMove event ...
    // ... to get element's offset and dimensions.
    const ref = useRef();

    // Keep track of whether card is hovered so we can increment ...
    // ... zIndex to ensure it shows up above other cards when animation causes overlap.
    const [isHovered, setHovered] = useState(false);

    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            // Array containing [rotateX, rotateY, and scale] values.
            // We store under a single key (xys) instead of separate keys ...
            // ... so that we can use animatedProps.xys.interpolate() to ...
            // ... easily generate the css transform value below.
            xys: [0, 0, 1],
            // Setup physics
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY || window.pageYOffset || document.body.scrollTop));

                // Set animated values based on mouse position and card dimensions
                const dampen = 50; // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.07 // Scale
                ];

                // Update values to animate to
                setAnimatedProps({ xys: xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                // Set xys back to original
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                )
            }}
        >
            {children}
        </animated.div>
    );
}



function Hero({ children }) {
    return (
        <div className="hero">
            <div className="hero-body">{children}</div>
        </div>
    );
}

function Image({ ratio, src }) {
    return (
        <div className="image-container">
            <div className="image-inner-container">
                <div
                    className="ratio"
                    style={{
                        paddingTop: ratio * 100 + '%'
                    }}
                >
                    <div className="ratio-inner">
                        <img src={src} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Info() {
    return (
        <div className="info">


            <div className="notice">(best viewed at larger screen width)</div>
        </div>
    );
}

const cards = [
    {
        id:0,
        title: "Smart Home IoT 🤖",
        subTitle:"IoT project based on a NodeMCU, Python server and MySQL db.",
        imgSrc: iot,
        link: "https://github.com/ThomasPellegrini/Smart-Home-IoT",
        selected: false,
            image: iot_image,
            imageRatio: 784 / 900
    },
    {
        id:1,
        title: "Uni News App📰",
        subTitle:"University News App made with React Native.",
        imgSrc: react_native,
        link: "https://github.com/ThomasPellegrini/University-News-App",
        selected: false,
        image: react_image,
            imageRatio: 839 / 1133
    },
    {
        id:2,
        title: "Discord Clone 🐍",
        subTitle:"Fully working Discord clone with the essential features. Made with Django.",
        imgSrc: pa,
        link: "https://github.com/ThomasPellegrini/discord-clone",
        selected: false,
            image: discord,
            imageRatio: 784 / 1016
    },
    {
        id:3,
        title: "Sorting Visualizer 📈",
        subTitle:"React project that visualizes the Merge Sort algorithm.",
        imgSrc: js,
        link: "https://github.com/ThomasPellegrini/SortingVisualizer",
        selected: false,
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
            imageRatio: 730 / 1030
    }


];




export default Card