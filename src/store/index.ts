import {createStore,combineReducers} from 'redux';
import {fieldReducer } from './fieldReducer';
import {composeWithDevTools } from 'redux-devtools-extension';
import { turnReducer } from './turnReducer';
import { canMoveReducers } from './canMoveReducer';
import { stageReducer } from './stageReducer';

const rootReducer = combineReducers({
    field:fieldReducer,
    turn:turnReducer,
    canMove:canMoveReducers,
    stage:stageReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>