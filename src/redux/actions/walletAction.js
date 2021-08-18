import { ActionType } from "../constants/walletActions";

export const getWalletBalance = (balance) => {
    return {
        type: ActionType.WALLET_GET_BALANCE,
        payload: balance
    }
}