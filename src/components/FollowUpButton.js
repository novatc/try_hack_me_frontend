import {useState} from "react";
import {Button} from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner";
import {startAttack} from "../services/attack";
import {useNavigate} from "react-router-dom";

const FollowUpButton = (props) => {


    const subdomain = props.data
    const [loading, setLoading] = useState(false)
    const [attackResult, setAttackResult] = useState()
    let navigate = useNavigate();


    const onFollowUp = async () => {
        setLoading(true)
        try {

            const result = await startAttack(true, true,
                true, true, true, subdomain)
            setAttackResult(result)
            window.location.reload()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading ?
                <LoadingSpinner/>
                : <Button onClick={onFollowUp}>
                    Scan {subdomain}
                </Button>
            }

        </>
    )
};
export default FollowUpButton