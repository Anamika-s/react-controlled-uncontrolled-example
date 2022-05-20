import React, { Component } from 'react'

export default class AddNumbers extends Component {
  state={
    no1: this.props.no1,
    no2:this.props.no2,
    res:0
  }
  handle = e=>
  {
    // console.log("a");
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    this.setState({[e.target.name] : e.target.value});
  }
  AddNumbers = e =>
  {
     e.preventDefault();
     this.setState({res : parseInt(this.state.no1) +parseInt(this.state.no2)});
  }

  render() {
    return (
      <div className='container'>
      <h1>AddNumbers</h1>
      <form onSubmit={this.AddNumbers}>
       <div className='form-group'>
         <label> Enter No 1</label>
         <input type="number" className="form-control" name='no1' value={this.state.no1} onChange={this.handle}/>
       </div>


       <div className='form-group'>
         <label> Enter No 2</label>
         <input type="number" className="form-control" name='no2' value={this.state.no2} onChange={this.handle}/>
       </div>
       
       <div className='form-group'>
         <label> Result </label>
         <input type="number" className="form-control" name='res' value={this.state.res} onChange={this.handle}/>
       </div>
       <button className='btn btn-danger' type='submit'> Add </button>
      </form>
      </div>
    )
  }
}
