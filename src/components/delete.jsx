import React, { Component } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as actions from '../state-management/action';
import {connect} from 'react-redux'

class Delete extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick = ()=>{
       console.log('clicked',this.props.delVal)
       this.props.DeleteUsersData(this.props.delVal)
    }


  render() {
    return (
      <div onClick={this.handleClick}>
      <DeleteForeverIcon/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{

    return{
        DeleteUsersData : (TaskData)=>
            dispatch(
             {
                 type:actions.DELETE,payload:TaskData
             }
          )

    
}
}

let hoc = connect(null,mapDispatchToProps)
export default hoc(Delete);