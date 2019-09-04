import React from 'react'
import uuidv1 from 'uuid/v1'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { connect } from "react-redux";
import { Divider } from '@material-ui/core';

const RollHistoryTable = (props) => {
    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Dice Rolls</TableCell>
                    <TableCell>Dice Face</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {mapRollsToTableRows(props.rolls)}
            </TableBody>
        </Table>
    )
}

const mapRollsToTableRows = (rolls) => {
    return rolls.map((roll) => {
        return (
            <TableRow key={uuidv1()}>
                <TableCell align="center" key={uuidv1()}>
                    {roll.roll}
                </TableCell>
                <TableCell align="center" key={uuidv1()}>
                    {roll.die}
                </TableCell>
            </TableRow>
        )
    })
}

const mapStateToProps = state => ({
    rolls: state.rollDice.rolls
  });
  
  export default connect(
    mapStateToProps,
    null
  )(RollHistoryTable);