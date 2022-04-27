import {Card, Col, Container, Row, Table} from "react-bootstrap";


const AskokResult = (props) => {

    const test_result = {
        "headers": {
            "HTTP/1.1 200 OK": {
                "Date": "Tue, 26 Apr 2022 11:46:33 GMT",
                "Server": "Apache/2.4.7 (Ubuntu)",
                "Accept-Ranges": "bytes",
                "Vary": "Accept-Encoding",
                "Content-Encoding": "gzip",
                "Content-Length": "1570",
                "Keep-Alive": "timeout=5, max=100",
                "Connection": "Keep-Alive",
                "Content-Type": "text/html"
            }
        },
        "dns": {
            "A": "45.33.49.119",
            "AAAA": "2600:3c01:e000:3e6::6d4e:7061",
            "MX": "5 ALT1.ASPMX.L.GOOGLE.COM.",
            "NS": "ns3.linode.com.",
            "TXT": "\"google-site-verification=SrtYpJGxZzMTcczZG44XtLVK-sEPit9bputDjWc0lF4\"",
            "SOA": "ns1.linode.com. hostmaster.insecure.org. 2021000008 14400 14400 1209600 3600"
        },
        "subdomain": {
            "scanme.nmap.org": "45.33.32.156",
            "research.nmap.org": "45.33.49.119",
            "scannme.nmap.org": "45.33.49.119",
            "www.nmap.org": "45.33.49.119",
            "svn.nmap.org": "45.33.49.119",
            "wwww.nmap.org": "45.33.49.119",
            "ack.nmap.org": "45.33.49.119",
            "issues.nmap.org": "45.33.49.119"
        },
        "banner": {
            "ip": "45.33.49.119",
            "http": {
                "title": "403 Forbidden",
                "server": "Apache/2.4.6 (CentOS)",
                "apps": [
                    "CentOS",
                    "Apache,2.4.6"
                ]
            },
            "https443": {
                "title": "301 Moved Permanently",
                "server": "Apache/2.4.6 (CentOS)",
                "cn": "insecure.com",
                "apps": [
                    "CentOS",
                    "Apache,2.4.6"
                ]
            },
            "ssh": "SSH-2.0-OpenSSH_7.4"
        },
        "geoip": {
            "IP Address": "45.33.49.119",
            "Country": "United States",
            "State": "California",
            "City": "Fremont",
            "Latitude": "37.5625",
            "Longitude": "-122.0004"
        }
    }
    let dns = "NaN"
    let subdomain = "NaN"
    let geoip = "NaN"

    if (this.props.data !== "None") {
        const dns_scan = JSON.parse(props.data)
        dns = dns_scan.dns
        subdomain = dns_scan.subdomain
        geoip = dns_scan.geoip
    }

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