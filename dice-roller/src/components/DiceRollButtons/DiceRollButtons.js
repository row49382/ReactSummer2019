import { connect } from "react-redux";
import React from "react";
import { actionCreators as diceRollerActionCreators } from "../../store/reducers/DiceRoller";
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";

const DiceRollButtons = (props) => {
    return (
        <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <Button value="4"  onClick={() => props.actions.rollDice(4)}>4</Button>
                    <Button value="6"  onClick={() => props.actions.rollDice(6)}>6</Button>
                    <Button value="8"  onClick={() => props.actions.rollDice(8)}>8</Button>
                  </Grid>
                  <Grid item>
                    <Button value="10" onClick={() => props.actions.rollDice(10)}>10</Button>
                    <Button value="12" onClick={() => props.actions.rollDice(12)}>12</Button>
                    <Button value="20" onClick={() => props.actions.rollDice(20)}>20</Button>
                  </Grid>
                  <Grid item>
                    <Button value="Percentile" onClick={() => props.actions.rollPercentileDice()}>%</Button>
                  </Grid>
                </Grid>
    )
}
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators({
          rollDice: diceRollerActionCreators.rollStandardDie,
          rollPercentileDice: diceRollerActionCreators.rollPercentileDice,
          clearRolls: diceRollerActionCreators.clearRolls,
          clearSum: diceRollerActionCreators.clearSum  
        },
        dispatch
      )
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(DiceRollButtons);