import { AccountActionType } from '../constants/accountActions';

const initialState = {
    account: null
}

export const accountReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case AccountActionType.SET_ACCOUNT_NUMBER:
            return {...state, account: payload}
        default:
            return state;
    }
}