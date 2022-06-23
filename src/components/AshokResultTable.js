import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import FollowUpButton from "./FollowUpButton";


const AskokResult = (props) => {

    console.log("transferred: ", typeof props.data)

    if (props.data === 'None')
        return (<>
        </>)


    const dns_scan = props.data
    const dns = dns_scan.dns
    const subdomain = dns_scan.subdomain
    const geoip = dns_scan.geoip

    console.log("dns: ", dns)

    return (
        <>
            <Card>
                <Card.Body>
                    <h4>DNS Values</h4>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>A</th>
                            <th>AAA</th>
                            <th>MX</th>
                            <th>NS</th>
                            <th>TXT</th>
                            <th>SOA</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{dns.A}</td>
                            <td>{dns.AAAA}</td>
                            <td>{dns.MX}</td>
                            <td>{dns.NS}</td>
                            <td>{dns.TXT}</td>
                            <td>{dns.SOA}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h4>Liste der gefundenen Subdomains:</h4>
                    {
                        Object.keys(subdomain).map((key,_) => (
                            <Container>
                                <Row>
                                    <Col>
                                        <ul>{key}</ul>
                                    </Col>
                                    <Col>
                                        <ul>{subdomain[key]}</ul>
                                    </Col>
                                    <Col>
                                        <FollowUpButton data={subdomain[key]}>

                                        </FollowUpButton>
                                    </Col>
                                </Row>
                            </Container>
                        ))
                    }
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h4> Standort des Servers</h4>
                    <ul>Stadt: {geoip.City}</ul>
                    <ul>State: {geoip.State}</ul>
                    <ul>State: {geoip.Country}</ul>
                </Card.Body>
            </Card>
        </>

    )

};

export default AskokResult;