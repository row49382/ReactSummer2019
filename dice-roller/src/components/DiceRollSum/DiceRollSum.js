import { Table, TableRow, TableCell, TableBody, TableHead } from "@material-ui/core";
import React from 'react';
import { connect } from "react-redux";

const DiceRollSum = (props) => {
    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Sum</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        {props.sum}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

const mapStateToProps = state => ({
    sum: state.rollDice.sum
  });
  
  export default connect(
    mapStateToProps,
    null
  )(DiceRollSum);