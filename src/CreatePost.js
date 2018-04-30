import React, { Component } from 'react';
class CreatePost extends Component {
  render(){
   
    return(
      <div className="container">
       <div className="row">
        <div className="col s6">
        <input
        className=""
        name="inputValue"
        placeholder="write wahtever you want"
              autoFocus
        value ={this.props.inputValue}
          onChange={e => this.props.Change(e) 
        }
          
        />
        </div>
          
        <div className=" col s1">
            <button className=" waves-effect waves-light btn" onClick={this.props.handleButtonClick}><i className=" largematerial-icons">add</i> </button>
        </div>
        </div>
      </div>
       
    );
  }
}

export default CreatePost;