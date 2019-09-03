import React from 'react'
import uuidv1 from 'uuid/v1'

const RollHistoryTable = (rolls) => {
    return (
        <table>
            <tr>
                <th>Dice Rolls</th>
            </tr>
            <tr>""</tr>
        </table>
    )
}

const mapRollsToTableRows = (rolls) => rolls.map((roll) => <td key={uuidv1()}>{roll}</td>)

export default RollHistoryTable;