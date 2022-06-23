import {Container, Form} from "react-bootstrap";
import {useContext} from "react";
import {ScriptContext} from "../contexts/ScriptContext";


const UrlInput = () => {
    const { setTargetUrl } = useContext(ScriptContext);
    const handleInput = event => {
        setTargetUrl(event.target.value);  };

    return (
        <>
            <Container className="mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Target URL</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Eingabe der zu überprüfenden Webseite. Beachte folgendes Format: http://www.example.com"
                            onChange={handleInput}
                        />
                        <Form.Text className="text-muted">
                            Formatting rules:
                            Beachte folgendes Format: http://www.example.com"

                        </Form.Text>
                    </Form.Group>
                </Form>
            </Container>


        </>
    )


};

export default UrlInput;