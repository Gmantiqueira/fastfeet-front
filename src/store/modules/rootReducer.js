import { combineReducers } from 'redux';

import auth from './auth/reducer';
import delivery from './delivery/reducer';
import user from './user/reducer';

export default combineReducers({ auth, delivery, user });
