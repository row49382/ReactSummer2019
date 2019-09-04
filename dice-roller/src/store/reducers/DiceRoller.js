import getRandomRoll from "../../randomRoller";

const rollDice = "ROLL_DICE"
const rollPercentileDice = "ROLL_PERCENTILE_DICE"
const clearRolls = "CLEAR_ROLLS"
const clearSum = "CLEAR_SUM"

const initialState = {
    rolls: [],
    sum: 0,
    lastRoll: 0
}

export const actionCreators = {
    rollStandardDie: (dieFace) => dispatch => {
        dispatch({
            type: rollDice,
            payload: {
                roll: getRandomRoll(dieFace),
                dieFace: dieFace
            }
        })
    },
    rollPercentileDice: () => dispatch => {
        let baseZeroRoll = getRandomRoll(10) - 1
        let baseTenRoll = (getRandomRoll(10) * 10) - 10
        let roll = baseTenRoll + baseZeroRoll

        dispatch({
            type: rollPercentileDice,
            payload: {
                roll: roll === 0 ? 100 : roll,
                dieFace: "%"
            }
        })
    },
    clearRolls: () => dispatch => {
        dispatch({
            type: clearRolls
        })
    },
    clearSum: () => dispatch => {
        dispatch({
            type: clearSum
        })
    }
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case rollDice:
      case rollPercentileDice:
          return {
              rolls: [
                  ...state.rolls, { 
                      "roll": action.payload.roll, 
                      "die": action.payload.dieFace 
                  }
              ],
              sum: state.sum + action.payload.roll,
              lastRoll: action.payload.roll
          }
      case clearRolls:
          return {
              ...state,
              rolls: [],
              lastRoll: 0
          }
      case clearSum:
          return {
              ...state,
              sum: 0
          }
      default:
        return state;
    }
  };