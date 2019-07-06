import React from 'react'

const Mybutton = (props) =>{

    return(<button onClick={props.onClick}>{props.number}</button>)
}

export default Mybutton;