import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as actions from '../state-management/action'
import {connect} from 'react-redux';

class InputField extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            data:[],
            taskData:[]
        }
        this.myInput = React.createRef();
    }

    //  handleChange = (e)=>{
    //      e.preventDefault();
    //    this.setState({
    //        [e.target.name]:[e.target.value]
    //    })
    //  }
     handleClick =(e)=>{
        e.preventDefault();
        console.log('ref',this.myInput.current.value)
     this.props.getAllUsersData(this.myInput.current.value);

     }


    render() {
        return (
            <>
                <Box
                    component="form"

                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        sx={{
                            '& > :not(style)': { m: 1, width: '100ch' },
                        }}
                        label="Today Tasks"
                        color="secondary"
                        inputRef ={this.myInput}
                        focused 
                        />

                    <Button
                        sx={{
                            m: 2
                        }}
                        variant="contained"
                        onClick={this.handleClick}
                        >
                            
                     ADD</Button>
                </Box>


            </>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{

    return{
        getAllUsersData : (TaskData)=>
            dispatch(
             {
                 type:actions.TODODATA,payload:TaskData
             }
          )

    
}
}

let hoc = connect(null,mapDispatchToProps)
export default hoc(InputField);
