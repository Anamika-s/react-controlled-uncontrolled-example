import React, { Component } from 'react'

export default class UnControlledDemo extends Component {
  constructor(props)
  {
    super(props);
    this.myref = React.createRef();  
    this.SubmitData =this.SubmitData.bind(this);
  }
  SubmitData(e)
  {
     e.preventDefault();
    //  console.log(this);
    //  console.log(this.myref);
     console.log(this.myref.current.value);

  }
  render() {
     return (
      <div>
        <h1> UnControlledDemo </h1>
        <form onSubmit={this.SubmitData}>
<input type="text" ref={this.myref}/>
<button type='submit'> Submit </button>
        </form>


      </div>
    )
  }
}
