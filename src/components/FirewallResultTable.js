import {Badge, Card, Col, Container, Row, Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const FirewallResultTable = (props) => {
    if (props.data === 'None')
        return (<>
        </>)

    const firewall_scan = props.data
    let firewalls = firewall_scan.firewalls
    let number_of_requests = firewall_scan.number_of_requests


    return (
        <>
            <Card>
                <Card.Body>
                    <h3>Firewalls</h3>
                    <Container>
                        <Row>
                            <Col>
                                <p>Firewalls</p>
                                {
                                    firewalls.map(p=>(
                                        <ul>{p}</ul>
                                    ))
                                }
                            </Col>
                            <Col>
                                <p>Anzahl an Anfragne</p>
                                <ul>{number_of_requests}</ul>
                            </Col>
                        </Row>

                    </Container>

                </Card.Body>
            </Card>

        </>


    )


};

export default FirewallResultTable;