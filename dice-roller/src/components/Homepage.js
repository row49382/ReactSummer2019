import Page from '../shared/Page';
import PageHeader from '../shared/PageHeader';
import PageFooter from '../shared/PageFooter';
import React from "react";
import { actionCreators as diceRollerActionCreators } from "../store/reducers/DiceRoller";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './Homepage.css';
import RollHistoryTable from './RollHistoryTable/RollHistoryTable';

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import DiceRollSum from './DiceRollSum/DiceRollSum';
import DiceRollButtons from './DiceRollButtons/DiceRollButtons';
import { Container } from '@material-ui/core';


const HompageComponent = (props) => {
   return (
        <Page>
          <Grid container direction="column" justify="center" alignItems="stretch" spacing={6}>
          <Grid item>
            <PageHeader />
          </Grid>
          <Grid item>
          <Grid container direction="row" justify="center" alignItems="stretch" spacing={8}>
            <Grid item>
              <RollHistoryTable />
            </Grid>
            <Grid item xs={6}>
              <Container fixed>
              <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                <Grid item>
                  <div>{props.lastRoll}</div>
                </Grid>
                <DiceRollButtons props={props}/>
                <Grid item>
                  <Button onClick={() => props.actions.clearRolls()}>Clear History</Button>
                  <Button onClick={() => props.actions.clearSum()}>Clear Sum</Button>
                </Grid>
              </Grid>
              </Container>
            </Grid>
            <Grid item>
                <DiceRollSum props={props}/>
            </Grid>
          </Grid>
          </Grid>
          <Grid item>
          <PageFooter />
          </Grid>
          </Grid>
        </Page>
      );
}

HompageComponent.propTypes = {
    lastRoll: PropTypes.number,
    sum: PropTypes.number,
    rolls: PropTypes.array
}

const mapStateToProps = state => ({
    lastRoll: state.rollDice.lastRoll,
    sum: state.rollDice.sum,
    rolls: state.rollDice.rolls
  });
  
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
    mapStateToProps,
    mapDispatchToProps
  )(HompageComponent);