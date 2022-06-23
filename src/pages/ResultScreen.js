import NmapResultTable from "../components/NmapResultTable";
import NavBar from "../components/navBar";
import AshokResultTable from "../components/AshokResultTable";
import FirewallResultTable from "../components/FirewallResultTable";
import {Container} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import BuildWithResultTable from "../components/BuildWithResultTable";

const ResultScreen = () => {
    const {state} = useLocation();
    const nmapReport = (state['report']['nmap_scan'])
    const ashokReport = (state['report']['ashok_scan'])
    const firewalls = (state['report']['waf00f_scan'])
    const buildWith = (state['report']['wappalyzer_scan'])
    console.log("Build with: ", buildWith)

    return (
        <>
            <NavBar/>
            <Container>
            <NmapResultTable data={nmapReport}/>
            <AshokResultTable data={ashokReport}/>
            <BuildWithResultTable data={buildWith}/>
            <FirewallResultTable data={firewalls}/>
            </Container>
        </>
    )
};

export default ResultScreen;