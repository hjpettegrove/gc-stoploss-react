import { AccountActionType } from "../constants/accountActions"


export const setAccountNumber = (account_num) => {
    return {
        type: AccountActionType.SET_ACCOUNT_NUMBER,
        payload: account_num
    }
}