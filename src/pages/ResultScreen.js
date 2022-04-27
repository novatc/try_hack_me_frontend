import NmapResultTable from "../components/NmapResultTable";
import NavBar from "../components/navBar";
import AshokResultTable from "../components/AshokResultTable";
import FirewallResultTable from "../components/FirewallResultTable";
import {Container} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const ResultScreen = () => {
    const {state} = useLocation();
    const nmapReport = (state['report']['nmap_scan'])
    const ashokReport = (state['report']['ashok_scan'])
    const firewalls = (state['report']['waf00f_scan'])
    console.log("Nmap: ",nmapReport)
    console.log("DNS: ",ashokReport)
    console.log("firewalls: ",firewalls)

    return (
        <>
            <NavBar/>
            <Container>
            <NmapResultTable data={nmapReport}/>
            <AshokResultTable data={ashokReport}/>
            <FirewallResultTable data={firewalls}/>
            </Container>
        </>
    )
};

export default ResultScreen;