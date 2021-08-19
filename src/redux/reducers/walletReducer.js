import { ActionType } from '../constants/walletActions';

const initialState = {
    wallet: {
        balance: 0,
        tokens: [],
        pairs: []
    }
}


export const walletReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ActionType.WALLET_SET_BALANCE:
            return {...state, wallet: payload}
        default:
            return state;
    }
}