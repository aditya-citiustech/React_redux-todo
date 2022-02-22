import React, { Component } from 'react'
import {connect} from 'react-redux'
import Delete from './delete';

 class Showdata extends Component {
   constructor(props){
     super(props);
   }

   handleClick = (index)=>{
   
console.log('click function',index)
    
   }

  render() {
    return (
      <div>
        {console.log('alldata',this.props.allData)}
        {this.props.allData?
        this.props.allData.map((val,index)=>(
          <ul key={index}>
             <li>{val}&nbsp;
             <Delete delVal = {val}/>
             </li>   
          </ul>
        ))
     :null }
      </div>
    )
  }
}

const mapstateToProps = (reducerData) =>{
console.log('reducerdata',reducerData)
  return{
allData : reducerData.users.todoData
};

}

let hoc = connect(mapstateToProps,null);
export default hoc(Showdata);
