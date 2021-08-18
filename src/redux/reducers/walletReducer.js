import { ActionType } from '../constants/walletActions';
import initialState from '../store/initStore';

export const walletReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ActionType.WALLET_GET_BALANCE:
            return {...state, wallet: payload}
        default:
            return state;
    }
}