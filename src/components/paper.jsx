import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputField from './input'
import Showdata from './showdata';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt:5,
          ml: 10,
          width: 1100,
          height: 500,
         alignitems: 'center'

        },
      }}
    >
      <Paper elevation={3}>
       <InputField/> 
       <Showdata/>
    </Paper>
    </Box>
  );
}
