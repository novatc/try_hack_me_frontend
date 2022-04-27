import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseOne = () => {
    const { useNmap, setUseNmap, useAshok, setUseAshok, useRipe, setUseRipe } = useContext(ScriptContext);

    return (
        <>

            <Card body className='mt-5'>
                <h3>Phase 1:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="nmap-switch"
                                    label="Use NMAP"
                                    onChange={() => setUseNmap(!useNmap)}
                                />
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="ashok-switch"
                                    label="Use Ashok"
                                    onChange={() => setUseAshok(!useAshok)}
                                />
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </Card>
        </>
    )
};
export default PhaseOne;