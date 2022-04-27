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
                            placeholder="Enter target URL. Pay attention to formatting"
                            onChange={handleInput}
                        />
                        <Form.Text className="text-muted">
                            Formatting rules:

                        </Form.Text>
                    </Form.Group>


                </Form>
            </Container>


        </>
    )


};

export default UrlInput;