import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseThree = () => {
    const { useWaf00f, setUseWaf00f } = useContext(ScriptContext);

    return (
        <Card className='mt-5'>
            <Card.Body>
                <h3>Phase 3:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="waf00f-switch"
                                    label="Use waf00f"
                                    onChange={() => setUseWaf00f(!useWaf00f)}
                                />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    )


};

export default PhaseThree;