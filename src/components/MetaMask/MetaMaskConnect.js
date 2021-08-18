import MetaMaskOnboarding from "@metamask/onboarding";
import { useState } from 'react';



const MetaMaskConnect = () => {

    

    const [mmConnectBtnText, setmmConnectBtnTxt] = useState('')
    const forwarderOrigin = window.location.href
    const onboarding = new MetaMaskOnboarding({forwarderOrigin})

    //#region UI Rendering Funcs

    const renderMetaMaskConnectBtn = (props) => {
        return (
            <button onClick={props.onClickHandler} disabled={props.isDisabled}>{props.buttonText}</button>
        )
    }

    //#endregion

    const isMetaMaskInstalled = () => {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    const metamaskIsInstalled =  () => {
        setmmConnectBtnTxt('Connect')
        return ( <renderMetaMaskConnectBtn onClickHandler={onClickConnect} isDisabled="false" buttonText={mmConnectBtnText}/> )        
    }

    const metamaskIsNotInstalled =  () => {
        setmmConnectBtnTxt('Click here to install MetaMask')
        return (
            <button onClick={onClickInstall} disabled="false">{mmConnectBtnText}</button>
        )        
    }

    const onClickInstall = (e) => {
        setmmConnectBtnTxt('Onboarding in progress')
    }

    const onClickConnect = (e) => {
        
    }

    const checkMetaMaskInstalled = () => {
        const { ethereum } = window;
        if ( Boolean(ethereum && ethereum.isMetaMask) ) 
        {

        }
    }

    return ( 
        <div className="metamask-init">
        </div>
    );
}
 
export default MetaMaskConnect;