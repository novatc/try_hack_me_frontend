import {Badge, Card, Container, Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const NmapResultTable = (props) => {
    console.log(props)


    if (props.data === 'None')
        return (<>
        </>)

    const nmap_scan = JSON.parse(props.data)
    const os = nmap_scan.os_name
    let os_accuracy = nmap_scan.os_accuracy
    let ip = nmap_scan.ip
    let ports = nmap_scan.ports

    return (
        <>

            <Card>
                <Card.Body>
                    <h4>IP-Adressen</h4>

                    <ul>IPv4: {ip}</ul>


                    <h4> Betriebssystem</h4>
                    <ul>{os}, Genauigkeit: {os_accuracy}%</ul>
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