import {Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState, useEffect, useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseTwo = () => {
    const { useWappalyzer, setUseWappalyzer } = useContext(ScriptContext);

    return (
            <Card body className='mt-5'>
                <h3>Phase 2:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="wappalyzer-switch"
                                    label="Use wappalyzer"
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