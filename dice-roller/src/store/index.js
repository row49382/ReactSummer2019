import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as rollDice } from './reducers/DiceRoller';

export default function configureStore() {
    const reducers = {
      rollDice: rollDice
    };
  
    const middleware = [thunk];
  
    const rootReducer = combineReducers({
      ...reducers
    });
  
    return createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middleware))
    );
  }