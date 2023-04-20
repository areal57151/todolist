
import { Component } from 'react';
import done from './done.jpg';
export class TodoList extends Component {
    state = {
        userInput: '',
        TodoList: []
    }
    onChangeEvent(e) {
        this.setState ({userInput: e}) ;
    }
    addItem(input) {
        if(input === '') {
           alert("пожалуйста, напишите какое-нибудь дело...") 
        }  else {
        let listArray = this.state.TodoList;
        listArray.push(input);
        this.setState({TodoList: listArray, userInput: ''})   
    }}
    deleteItem (){
        let listArray = this.state.TodoList;
        listArray = [];
        this.setState({TodoList: listArray})
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
       e.preventDefault();
    }
    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                   <div className='container'> 
                      <input type="text" placeholder=' что нужно сделать...'
                      onChange={(e) => {this.onChangeEvent(e.target.value)}}
                      value={this.state.userInput}/>
                   </div>
                   <div className='container'>
                       <button onClick={() => this.addItem(this.state.userInput)}className="add"> добавить дело</button>
                    </div>
                    <ul>
                       {this.state.TodoList.map ((item, index) => (
                           <li onClick={this.crossedWord}key= {index}> <img src={done} width="15px"alt='done'/> {item}</li>
                       ))}
                     </ul>
                   <div className='container'>
                       <button onClick={() => this.deleteItem()}className="delete">удалить</button>
                    </div>
                 </form>
            </div>
        )
    }
}
