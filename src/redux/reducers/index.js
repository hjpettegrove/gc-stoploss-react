import { combineReducers } from 'redux';
import { wallet } from 'zksync';

import { walletReducer } from './walletReducer';

const reducers = combineReducers({
    wallet: walletReducer
})

export default reducers;