import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const WalletComponent = () => {
    const dispatch = useDispatch();
    const { account, chainId } = useEthers();

    const getWalletBalance = async() => {
        const response = await axios.get(`http://localhost:9013/api/wallet/balance/${chainId}/${account}`).catch( e => console.log("Error with axios: "<e))
        dispatch()
    }


    return account ? (
        <div className="wallet">
            Wallet
        </div>
    ) : ( 
        <div className="wallet">
            Connect Wallet
        </div>
    );
}
 
export default WalletComponent;