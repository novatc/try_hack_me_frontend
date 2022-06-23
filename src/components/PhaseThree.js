import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseThree = () => {
    const { useWaf00f, setUseWaf00f } = useContext(ScriptContext);
    const fireWallGuide = "Mit diesem Scan wird überprüft ob sich die Webseite hinter einer Webapplication Firewall befindet." +
        "Dafür werden mehrere Anfragen an den Server gestellt und basierend auf dessen Antwort festgestellt ob und wenn ja welche " +
        "Firewall die Anwendung schützt. Diese Abfrage kann als Akt eines Angriffs interpretiert werden, da es sicher aber nur" +
        "um eine Analyse der Antwort hält, wird keine Grenze überschritten."


    return (
        <Card className='mt-5'>
            <Card.Body>
                <h3>Phase 3:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Card.Body>
                                {fireWallGuide}
                            </Card.Body>
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