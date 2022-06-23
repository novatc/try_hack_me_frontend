import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";

const PhaseOne = () => {
    const { useNmap, setUseNmap, useAshok, setUseAshok, useRipe, setUseRipe } = useContext(ScriptContext);
    const nampGuide = "Nmap wird ein Portscan durchführen und dabei die Antworten des Servers interpretieren und daraus" +
        "genutzte Services und auch das Betriebssystem bestimmen. Nmap Scans können als 'Angriff' gedeutet werden."

    const dns_guide = "Es werden alle relevanten DNS Einträge zur angegebenen Domain abgerufen. Diese Informationen liegen" +
        "auf öffentlichen Servern und deren Abfrage stellt kein Akt eines Angriffs dar."
    return (
        <>

            <Card body className='mt-5'>
                <h3>Phase 1:</h3>
                <Container>
                    <Row>
                        <Col>
                            <Card.Body>
                                {nampGuide}
                            </Card.Body>
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
                            <Card.Body>
                                {dns_guide}
                            </Card.Body>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="ashok-switch"
                                    label="DNS Info"
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