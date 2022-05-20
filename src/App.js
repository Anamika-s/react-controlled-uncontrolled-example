import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
   state={
    value :"ajay"
  }
   
  handleChange = event=>
  {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("Inside Method");
    this.setState({value : event.target.value.toUpperCase()});
  }
  render()
  {
  
  return (
    <div className="App">
      <form>
        <h2> Controlled by React </h2>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>

    </div>
  );
}
}
export default App;
