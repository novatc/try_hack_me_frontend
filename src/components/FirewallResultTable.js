import {Badge, Card, Col, Container, Row, Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const FirewallResultTable = (props) => {

    const firewall_scan = props.data
    const test_result = {'firewalls': ['None', "None"], 'number_of_requests': 2}
    let firewalls = "NaN"
    let number_of_requests = "NaN"

    if (this.props.data !== "None") {
        const firewall_scan = JSON.parse(props.data)
        firewalls = firewall_scan.dns
        number_of_requests = firewall_scan.subdomain
    }


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