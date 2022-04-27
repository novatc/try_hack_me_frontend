import {createContext, useEffect, useState} from 'react';

export const ScriptContext = createContext({})

const ScriptProvider = ({ children }) => {
    const [useNmap, setUseNmap] = useState(false);
    const [useAshok, setUseAshok] = useState(false);
    const [useRipe, setUseRipe] = useState(false);
    const [useWappalyzer, setUseWappalyzer] = useState(false);
    const [useWaf00f, setUseWaf00f] = useState(false);
    const [targetUrl, setTargetUrl] = useState("");


    useEffect(() => {
        console.log("Use NMAP: ",useNmap)
    },[useNmap])

    useEffect(() => {
        console.log("Use Ashok: ",useAshok)
    },[useAshok])

    useEffect(() => {
        console.log("Use Ripe: ",useRipe)
    },[useRipe])

    useEffect(() => {
        console.log("Use Wappalyzer: ",useWappalyzer)
    },[useRipe])

    useEffect(() => {
        console.log("Use Ripe: ",useWaf00f)
    },[useWaf00f])

    useEffect(() => {
        console.log("Target:  ",targetUrl)
    },[targetUrl])

    return (
        <ScriptContext.Provider
            value={{
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
            }}
        >
            {children}
        </ScriptContext.Provider>
    );
};

export default ScriptProvider;