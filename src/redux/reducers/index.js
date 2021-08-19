import { combineReducers } from 'redux';
import { accountReducer } from './accountReducer';
import { walletReducer } from './walletReducer';

const reducers = combineReducers({
    wallet: walletReducer,
    account: accountReducer,
})

export default reducers;