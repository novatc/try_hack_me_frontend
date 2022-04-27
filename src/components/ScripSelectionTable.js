import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import { useNavigate } from 'react-router-dom';
import PhaseThree from "./PhaseThree";
import {Alert, Button, Container} from "react-bootstrap";
import UrlInput from "./UrlInput";
import {useContext, useState} from "react";
import {ScriptContext} from "../contexts/ScriptContext";
import {startAttack} from "../services/attack";
import LoadingSpinner from "./LoadingSpinner";


const ScriptSelectionTable = () => {
    const {
        useNmap,
        setUseNmap,
        useAshok,
        setUseAshok,
        useRipe,
        setUseRipe,
        useWappalyzer,
        setUseWappalyzer,
        useWaf00f,
        setUseWaf00f,
        targetUrl,
        setTargetUrl
    } = useContext(ScriptContext);

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [attackResult, setAttackResult] = useState()

    let navigate = useNavigate();
    const onStartAttack = async () => {
        setError(false)


        if (targetUrl === "") {
            return setError(true)
        }
        setLoading(true)
        try {
            const result = await startAttack(useNmap, useAshok, useRipe, useWappalyzer, useWaf00f, targetUrl)
            setAttackResult(result)
            navigate('./ResultScreen',{state: {report:result}});


        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <Container>
                <PhaseOne/>
                <PhaseTwo/>
                <PhaseThree/>
                <UrlInput/>

                {error && <Alert variant="warning">
                    Target URL is needed!
                </Alert>}

                {
                    loading ?
                        <LoadingSpinner/>

                        : <Button variant="primary" type="submit" onClick={onStartAttack}>
                            Start Attack
                        </Button>
                }

            </Container>

        </>

    )

};

export default ScriptSelectionTable;