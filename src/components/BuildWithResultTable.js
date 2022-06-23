import {Badge, Card, Col, Container, Row, Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const BuildWithResultTable = (props) => {
    if (props.data === 'None')
        return (<>
        </>)

    const buildWithScan = props.data


    return (
        <>
            <Card>
                <Card.Body>
                    <h3>Technologien</h3>
                    {
                        Object.keys(buildWithScan).map((key, n) =>(
                            <Container>
                                <Row>
                                    <Col>
                                        <ul>{key}</ul>
                                    </Col>
                                    <Col>
                                        <ul>{key.versions}</ul>
                                    </Col>
                                </Row>

                            </Container>
                        ))
                    }



                </Card.Body>
            </Card>

        </>


    )


};

export default BuildWithResultTable;