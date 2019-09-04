import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const PageHeader = (props) => {
    return (
        <Box>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Dice Roller
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
    )
}

export default PageHeader