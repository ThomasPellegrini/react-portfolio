import React from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Particles from "react-particles-js";

import Hero from "../components/Hero";
import Content from "../components/Content";
import SocialFollow from "../components/SocialFollow"
import Background from "../assets/images/background.jpg"

import Axios from "axios";
import Container from "react-bootstrap/Container";

class ContactPage extends React.Component{
    constructor() {
        super();
        this.state = {
/*            name: '',
            email: '',
            message: '',*/
            disabled: false,
            /*emailSent: null*/
        }

    }



    handleChange = (event) => {
/*        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;*/

/*        this.setState({
            [name]: value
        })*/
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(event.target);


        this.setState({
            disabled: true,
        });

/*        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    })
                }else{
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })*/

    }



    render() {
        return(
            <div >

                <Hero title={this.props.title} />

               {/* <form name={"contact"} action={"/contact"} method={"post"} >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type={"hidden"}
                        name={"form-name"}
                        value={"contact"}

                    />
                    <input
                        required type={"text"}
                        name={"name"}
                        placeholder={"Name"}

                        id={"full-name"}
                    />
                    <input
                        required type={"text"}
                        name={"email"}
                        placeholder={"email"}
                    />
                    <textarea
                        required name={"message"}
                        placeholder={"Message"}
                        cols={"30"}
                        rows={"10"}>
                    </textarea>

                    <Button
                        className={"d-inline-block"}
                        variant={"primary"}
                        type={"submit"}
                        disabled={this.state.disabled}
                    >
                        Send
                    </Button>
                </form>
*/}

            <Content>
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>

                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </Content>




{/*                <Content >
                    <Form onSubmit={this.handleSubmit} display={"flex"} flexDirection={"column"}>

                        <Form.Group  action={"/contact"} method={"post"}>
                            <input type="hidden" name="form-name" value="contact" />
                            <Form.Label htmlFor={"full-name"}>Full Name</Form.Label>
                            <Form.Control
                                id={"full-name"}
                                name={"name"}
                                type={"text"}
                                value={this.state.name}
                                onChange={this.handleChange}flexDirection={"column"}

                            />

                            <Form.Label htmlFor={"email"}>Email</Form.Label>
                            <Form.Control
                                id={"email"}
                                name={"email"}
                                type={"email"}
                                value={this.state.email}
                                onChange={this.handleChange}
                            />

                            <Form.Label htmlFor={"message"}>Message</Form.Label>
                            <Form.Control
                                id={"message"}
                                name={"message"}
                                as={"textarea"}
                                row={"3"}
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button
                            className={"d-inline-block"}
                            variant={"primary"}
                            type={"submit"}

                        >
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className={"d-inline success-msg"}>Email Sent</p>}
                        {this.state.emailSent === false && <p className={"d-inline error-msg"}>Email Not Sent</p>}


                    </Form>
                </Content>*/}


                <SocialFollow />

            </div>
        )
    }
}

export default ContactPage