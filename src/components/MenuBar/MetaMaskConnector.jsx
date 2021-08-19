import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const MetaMaskConnector = () => {

    const {activateBrowserWallet, account, deactivate} = useEthers();
    const etherBalance = useEtherBalance(account);

    return account ? (
        <div className="d-inline-block">
            <div className="connect-button d-flex flew-row justify-content-evenly account-info">
                <p>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH</p>
                <p>{account && `${account.slice(0,6)}...${account.slice(account.length-4, account.length)}`}</p>
                <button onClick={deactivate} type="button" className="btn btn-secondary">
                    Disconnect wallet
                </button>
            </div>
        </div>
    ) : ( 
        <div className="d-inline-block">
            <button onClick={activateBrowserWallet} type="button" className="btn btn-primary">
                Connect Wallet
            </button>    
        </div>
    );
}
 
export default MetaMaskConnector;