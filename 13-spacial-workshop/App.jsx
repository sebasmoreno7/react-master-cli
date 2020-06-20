import React from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Button,
    Jumbotron,
    Badge,
    Form,
    FormControl,
} from 'react-bootstrap';
import './style.css';

const NASA_API = 'https://api.nasa.gov/';
const API_KEY = 'DEMO_KEY';

const App = () => (
    <>
        <Navbar bg="dark" className="justify-content-between">
            <Navbar.Brand className="display-6 text-white" as="h2">
                API Espacial
            </Navbar.Brand>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
        <Container as="main">
            <Row className="justify-content-md-center my-4">
                <Col>
                    <Jumbotron>
                        <h1>
                            ¿Qué puedes crear <Badge variant="dark">hoy</Badge>?
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas atque qui officiis ab rerum doloremque
                            numquam nobis modi! Ad voluptatibus consequuntur
                            eius sunt magnam incidunt quae laborum officia in
                            nesciunt?
                        </p>
                        <Button>Cualquier cosa!</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    </>
);

export default App;
