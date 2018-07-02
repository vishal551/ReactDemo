import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state ={
    persons:[
      {name:"Vishal",age:11018},
      {name:"Pratik",age:200},
      {name:"Aarti",age:500}
    ],
    showPersons:false
  }
  switchNameHandler=(newName)=>{
     this.setState({

      persons:[
        {name:newName,age:7777},
        {name:"Pratik",age:200},
        {name:"Aarti",age:500}
      ]
     })
  }
  newChangeHandler=(event)=>{
        this.setState({
          persons:[
            {name:event.target.value,age:7777},
            {name:"vishal",age:200},
            {name:"Aarti",age:500}
          ]
        })
  }
  togglePersonsHandler=()=>{
    const doesShow =this.state.showPersons;
    this.setState({
     showPersons:!doesShow
})
  
  }
    render() {
    const Style={

      backgroundColor:'white',
      font :'inherit',
      border :'1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    return (
      <div className="App">
       <h1>Hi I am react</h1> 
       <button style={Style} onClick={this.togglePersonsHandler}>Switch Name</button>
    {this.state.showPersons===true?
       <div>
      <Person  
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,"data")}
        changed={this.newChangeHandler}/>
      <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is : React</Person>
      <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>:null
    }
      </div>
    
    );
  }
}

export default App;
