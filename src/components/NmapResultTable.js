import {Badge, Card, Container, Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const NmapResultTable = (props) => {

    const test_result = {
        "ip": [
            "45.33.32.156"
        ],
        "os_name": "Linux 4.15 - 5.6",
        "os_accuracy": "100",
        "ports": [
            {
                "port": 22,
                "state": "open",
                "service": "ssh",
                "product": ""
            },
            {
                "port": 80,
                "state": "open",
                "service": "http",
                "product": ""
            },
            {
                "port": 9929,
                "state": "open",
                "service": "nping-echo",
                "product": ""
            },
            {
                "port": 31337,
                "state": "open",
                "service": "Elite",
                "product": ""
            }
        ]
    }
    let os = "NaN"
    let os_accuracy = "NaN"
    let ip = "NaN"
    let ports = "NaN"

    if (this.props.data !== "None") {
        const nmap_scan = JSON.parse(props.data)
        os = nmap_scan.os_name
        os_accuracy = nmap_scan.os_accuracy
        ip = nmap_scan.ip
        ports = nmap_scan.ports
    }

    return (
        <>

            <Card>
                <Card.Body>
                    <h4>IP-Adressen</h4>

                    <li>IPv4: {ip}</li>


                    <h4> Betriebssystem</h4>
                    <li>{os}, Genauigkeit: {os_accuracy}%</li>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Port Nummer</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            ports.map(p => (
                                <tr>{p.port}
                                    <td>{p.service}</td>
                                    <td>{p.state}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </>


    )


};

export default NmapResultTable;