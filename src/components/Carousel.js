import React from "react";

import iot from "../assets/images/iot.jpg";
import react_native from "../assets/images/react_native.jpg";
import youtube from "../assets/images/youtube.png";
import ml from "../assets/images/ml.jpg"
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
                    subTitle:"IoT project based on a NodeMCU dev board, Python server, MySQL db and telegram bot",
                    imgSrc: iot,
                    link: "https://github.com/ThomasPellegrini/Smart-Home-IoT",
                    selected: false
                },
                {
                    id:1,
                    title: "University News App",
                    subTitle:"University News App made with React Native",
                    imgSrc: react_native,
                    link: "https://www.youtube.com/",
                    selected: false
                },
                {
                    id:2,
                    title: "Machine Learning",
                    subTitle:"Test carousel subtitle",
                    imgSrc: ml,
                    link: "https://www.youtube.com/",
                    selected: false
                },
                {
                    id:3,
                    title: "YouTube2",
                    subTitle:"Test carousel subtitle",
                    imgSrc: youtube,
                    link: "https://www.youtube.com/",
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
        return items.map(item => {
            return <Card
                item={item} onClick={(e => this.handleCardClick(item.id, e))}
                key={item.id}
                />
        })
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