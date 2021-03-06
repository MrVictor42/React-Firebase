import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;