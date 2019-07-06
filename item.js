import React from 'react';

class Item extends React.Component  {
    constructor(props){
        super(props)

   
        this.state={
            value:1
        } }
    render(){

    return (<div>
        <button onClick={()=>{
            this.setState({value: this.state.value+1 })
        }} >{this.state.value}</button>
    </div>)
}};

export default Item;