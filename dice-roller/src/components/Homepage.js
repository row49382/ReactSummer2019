import Page from '../shared/Page';
import PageHeader from '../shared/PageHeader';
import PageFooter from '../shared/PageFooter';
import React, { Component } from "react";
import { actionCreators as diceRollerActionCreators } from "../store/reducers/DiceRoller";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './Homepage.css';
import RollHistoryTable from './RollHistoryTable';

class HompageComponent extends Component {
    constructor(props) {
      super(props)
      debugger;
      this.props = props
    }

    render() {
      debugger;
      return (
        <Page>
          <PageHeader />
          {/*<RollHistoryTable rolls={this.props.rolls}/>*/}
          <div>{this.props.lastRoll}</div>
          <br />
          <button value="4"  onClick={() => this.props.actions.rollDice(4)}>4</button>
          <button value="6"  onClick={() => this.props.actions.rollDice(6)}>6</button>
          <button value="8"  onClick={() => this.props.actions.rollDice(8)}>8</button>
          <button value="10" onClick={() => this.props.actions.rollDice(10)}>10</button>
          <button value="12" onClick={() => this.props.actions.rollDice(12)}>12</button>
          <button value="20" onClick={() => this.props.actions.rollDice(20)}>20</button>
          <button value="Percentile" onClick={() => this.props.actions.rollPercentiledice}>%</button>
          <br />
          <button value="Clear" onClick={() => this.props.actions.clearValues}>Clear</button>
          <PageFooter />
        </Page>
      );
    }
}

HompageComponent.propTypes = {
    lastRoll: PropTypes.number,
    sum: PropTypes.number,
    rolls: PropTypes.array
}

const mapStateToProps = state => ({
    lastRoll: state.lastRoll,
    sum: state.sum,
    rolls: state.rolls
  });
  
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators({
          rollDice: diceRollerActionCreators.rollStandardDie,
          rollPercentileDice: diceRollerActionCreators.rollPercentileDice,
          clearValues: diceRollerActionCreators.clearValues  
        },
        dispatch
      )
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HompageComponent);