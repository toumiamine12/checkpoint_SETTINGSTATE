import React from 'react';

import './App.css';

import Mybutton from './button';

const cpm =[ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]

class App extends React.Component {
  state={
    number:0,
    factoriel:0,
  }
  factorial(n){
     if (n === 0 || n === 1 ) {
     return 1 ;
    }
     return this.factorial(n - 1) * n;
  }

render(){ 

return(
  <div className="app">  
      <div> {cpm.map(e=><Mybutton onClick={()=>{
        this.setState({
          number:e,
          factoriel:this.factorial(e)
        })
      }} number={e} />)}</div>
      <h1>The Factorial of {this.state.number} is {this.state.factoriel}</h1>
  </div>
)
}
}

export default App;
