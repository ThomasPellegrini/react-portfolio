import React from "react";

import iot from "../assets/images/iot.jpg";
import react_native from "../assets/images/react_native.jpg";
import js from "../assets/images/js.png";
import pa from "../assets/images/python_android.jpg"
import Card from "../components/Card";
import ContactPage from "../pages/ContactPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: "Smart Home IoT",
                    subTitle:"Based on a NodeMCU, Python server and MySQL db",
                    imgSrc: iot,
                    link: "https://github.com/ThomasPellegrini/Smart-Home-IoT",
                    selected: false
                },
                {
                    id:1,
                    title: "University News App",
                    subTitle:"University News App made with React Native",
                    imgSrc: react_native,
                    link: "https://github.com/ThomasPellegrini/University-News-App",
                    selected: false
                },
                {
                    id:2,
                    title: "Test4Enforcers (Closed source for now :D)",
                    subTitle:"Python tool to validate enforcers for Android apps.",
                    imgSrc: pa,
                    /*link: "Closed source for now :D",*/
                    selected: false
                },
                {
                    id:3,
                    title: "Sorting Visualizer",
                    subTitle:"React project that visualizes the Merge Sort algorithm",
                    imgSrc: js,
                    link: "https://github.com/ThomasPellegrini/SortingVisualizer",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items= [...this.state.items]

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        // return items.map(item => {
        //     return <Card
        //         item={item} onClick={(e => this.handleCardClick(item.id, e))}
        //         key={item.id}
        //         />
        // })

        return (
            <Card

            />
        )
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className={"justify-content-around"}>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}


export default Carousel