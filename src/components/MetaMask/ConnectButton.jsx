import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useDispatch, useSelector } from "react-redux";
import { setAccountNumber } from "../../redux/actions/accountAction";
import { useEffect, useState } from "react";

const ConnectButton = () => {

    const account_state_number = useSelector(state => state.account)
    const [account_num, setAccountNum] = useState('')


    const {activateBrowserWallet, account, deactivate} = useEthers();
    const etherBalance = useEtherBalance(account);

    useEffect(() => {
        if(account) {
            setAccountNum(account)
        }
    }, [account])

    const HandleWalletConnect = async ()  => {
        setAccountNum('')
        activateBrowserWallet();
    }

    const handleWalletDisconnect= () => {
        deactivate();
        console.log("deactivate called")
    }

    return account ? (
        <div className="connect-button d-flex flew-row justify-content-evenly account-info">
            <p>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH</p>
            <p>{account && `${account.slice(0,6)}...${account.slice(account.length-4, account.length)}`}</p>
            <button onClick={handleWalletDisconnect} type="button" className="btn btn-secondary">
                Disconnect wallet
            </button>
        </div>
    ) : (
        <button onClick={HandleWalletConnect} type="button" className="btn btn-primary">
            Connect Wallet
        </button>    
    );
}


export default ConnectButton;