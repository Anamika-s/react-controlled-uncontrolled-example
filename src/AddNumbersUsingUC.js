import React, { Component } from 'react'

export default class AddNumbersUsingUC extends Component {
  constructor(props)
  {
    super(props);
    this.no1 = React.createRef();
    this.no2 = React.createRef();
    this.res = React.createRef();
    this.AddNumbers = this.AddNumbers.bind(this); 
  }
  AddNumbers(e)
  {
    e.preventDefault();
    this.res.current.value = parseInt(this.no1.current.value) + parseInt(this.no2.current.value);

  }
  render() {
    return (
      <div>
        <h1> AddNumbersUsingUC </h1>
        <form onSubmit={this.AddNumbers}>
        <div className='form-group'>
         <label> Enter No 1</label>
         <input type="number" className="form-control" ref={this.no1}/>
       </div>


       <div className='form-group'>
         <label> Enter No 2</label>
         <input type="number" className="form-control" name='no2' ref={this.no2}/>
       </div>
       
       <div className='form-group'>
         <label> Result </label>
         <input type="number" className="form-control" name='res'ref={this.res}/>
       </div>
       <button className='btn btn-danger' type='submit'> Add </button>
     
        </form>
        </div>
    )
       
    
  }
}
