import React, {Component} from 'react'

class PostList extends Component {
 
  render(){
    
    
    return(
          <div className="">
         
        
            <div className="">

               {this.props.todoList.map((todo,index) =>
                <div className="container" key={index}>
              < div className = {
                ` row ${todo.status  ? "teal lighten-6 " : ""}`
              } >
                    <button className=" col s1 waves-effect waves-light btn " onClick={ () =>this.props.markToDo(index)} > <i className="material-icons larg ">TODO </i></button>
                
              <p className="col s6"> 
              { todo.text}
              </p>
                <button className="col s1 waves-effect waves-light btn red "
                  onClick={() => this.props.deleteToDo(index)}
                >
                      <i className="material-icons red  larg">delete</i>
                    </button>
                  </div>
                </div>
          )}

         

            </div>

          </div>

    )
  }
 
}
export default PostList;