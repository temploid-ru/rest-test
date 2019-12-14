import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '{}',
            result: 'Результат',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        const value = e.target.value;

        this.setState({value});
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const value = JSON.stringify(JSON.parse(this.state.value));

        fetch('http://176.112.219.104:65480/api',
            {
                method: 'post',
                body: value,
                // mode: "cors"
            })
            .then(res => res.text())
            .then(text => this.setState({result: text}));


    }


    render() {
        return (
            <Container>
                <div style={{height: "100px"}}></div>
                <Form onSubmit={this.onSubmitHandler}>
                    <Row>
                        <Form.Group as={Col} controlId="formQuery">
                            <Form.Control rows="5" as="textarea" value={this.state.value}
                                          onChange={this.onChangeHandler}/>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <br/>
                <Row>
                    <Col>
                        <div style={{border: "1px solid", padding: "1em"}}>
                            {this.state.result}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default App;
