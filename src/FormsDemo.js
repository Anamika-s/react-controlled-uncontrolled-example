import React, { Component } from 'react'

export default class FormsDemo extends Component {
  state=
  {
     firstName:"",
     lastName:"",
     eMail:"",
     mobile:""

  }

  // handle1 = e=>
  // {
  //    this.setState({firstName :e.target.value});
  // }
  
  // handle2 = e=>
  // {
  //   this.setState({lastName :e.target.value});
  // }

  // handle3 = e=>
  // {
  
  //   this.setState({eMail :e.target.value});
  // }
  //   handle4 = e=>
  // {
   
  //   this.setState({mobile :e.target.value});
  // }
  handle = e=>
  {
    this.setState({[e.target.name]: e.target.value});
  }
  SubmitData = e =>
  {
    console.log(`Details are :   ${this.state.firstName}   ${this.state.lastName}`);
    console.log(this.state.lastName);
    console.log(this.state.eMail);
    console.log(this.state.mobile);
    
     alert("Form is submitted");
     e.preventDefault();
  }
  render() {
    return (
      <div> 
<form onSubmit={this.SubmitData}>

  <div>
    <label> First Name </label>
    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handle}/>
  </div>
  <div>
    <label> Last Name </label>
    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handle}/>
  </div>
  <div>
    <label> EMail </label>
    <input type="text" name="eMail" value={this.state.eMail}
    onChange={this.handle}/>
  </div>
  <div>
    <label> Mobile </label>
    <input type="text" name="mobile" value={this.state.mobile}
    onChange={this.handle}/>
  </div>
<button type='submit'> Submit </button>

</form>

      </div>
    )
  }
}
