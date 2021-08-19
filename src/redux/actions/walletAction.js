import { ActionType } from "../constants/walletActions";

export const getWalletBalance = (balance) => {
    return {
        type: ActionType.WALLET_SET_BALANCE,
        payload: balance
    }
}