import ScriptSelectionTable from "../components/ScripSelectionTable";
import ScriptProvider from "../contexts/ScriptContext";


const StartScreen = () => {


    return (
        <>
            <div className="row">
                <div className="col-md-8 offset-md-2 mt-5">
                    <h1 style={{"textAlign": "center"}}>Hack me!</h1>
                </div>
            </div>
            <ScriptProvider>
                <ScriptSelectionTable/>
            </ScriptProvider>

        </>
    )
};

export default StartScreen;