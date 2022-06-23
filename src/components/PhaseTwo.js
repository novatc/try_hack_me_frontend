import {Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState, useEffect, useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseTwo = () => {
    const { useWappalyzer, setUseWappalyzer } = useContext(ScriptContext);
    const buildWithGuide = "Durch diesen Scan werden die verwendeten Technologien der Webseite analysiert und in der" +
        "Ergebnisübersicht aufgelistet. Dabei werden die öffentlich einsehbaren Dateien analysiert. Diese Abfrage stellt" +
        "kein Akt eines Angriffs dar."

    return (
            <Card body className='mt-5'>
                <h3>Phase 2:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Card.Body>
                                {buildWithGuide}
                            </Card.Body>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="wappalyzer-switch"
                                    label="Use BuildWith"
                                    onChange={() => setUseWappalyzer(!useWappalyzer)}
                                />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Card>


    )


};

export default PhaseTwo;