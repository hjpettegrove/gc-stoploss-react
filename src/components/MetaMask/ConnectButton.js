import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const ConnectButton = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);
    console.log(etherBalance)

    const handleWalletConnect = () => {
        activateBrowserWallet();
    }

    return account ? (
        <div className="connect-button d-flex flew-row justify-content-evenly account-info">
            <p>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH</p>
            <p>{account && `${account.slice(0,6)}...${account.slice(account.length-4, account.length)}`}</p>
            <buttton onClick={() => alert('disconnect')} type="button" className="btn">
                Disconnect wallet
            </buttton>
        </div>
    ) : (
        <button onClick={handleWalletConnect} type="button" className="btn btn-primary">
            Connect to a wallet
        </button>    
    );
}


export default ConnectButton;