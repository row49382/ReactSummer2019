import getRandomRoll from "../../randomRoller";

const rollDice = "ROLL_DICE"
const rollPercentileDice = "ROLL_PERCENTILE_DICE"
const clearValues = "CLEAR_VALUES"

const initialState = {
    rolls: [],
    sum: 0,
    lastRoll: 0
}

export const actionCreators = {
    rollStandardDie: (dieFace) => dispatch => {
        dispatch({
            type: rollDice,
            roll: getRandomRoll(dieFace)
        })
    },
    rollPercentileDice: () => dispatch => {
        let baseZeroRoll = getRandomRoll(10) - 1
        let baseTenRoll = (getRandomRoll(10) * 10) - 1
        let roll = baseTenRoll + baseZeroRoll

        dispatch({
            type: rollPercentileDice,
            roll: roll
        })
    },
    clearValues: () => dispatch => {
        dispatch({
            type: clearValues
        })
    }
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case rollDice:
      case rollPercentileDice:
          return {
              rolls: [
                  ...state.rolls,
                  action.roll
              ],
              sum: state.sum + action.roll,
              lastRoll: action.roll
          }
      case clearValues:
          return {
              rolls: [],
              sum: 0,
              lastRoll: 0
          }
      default:
        return state;
    }
  };