import React  from 'react' ;
import {BrowserRouter , Route} from 'react-router-dom'
import Notes from './notes';
import AddNote from './AddNote';
import About from './components/About'
import Navbar from './navbar'
import home from './components/home'

class App extends React.Component{
  
  state = {
    notes:[
    ]
  } ;

  deletenotes =(id)=> {
    const notes = this.state.notes.filter((note)=>{
      return note.id !== id ;
    })
    this.setState({
      notes: notes
    })
  }

  addnotes = (note)=>{
    note.id = Math.random();
    const notes = [...this.state.notes,note];
    this.setState({
      notes: notes 
    })
  }
  render(){

    return(
    <BrowserRouter>

      <div className='todo-app container'>
        <Navbar />
        <Route exact path='/' component={home}/>
        <Route path = '/about' component={About}/>
        <h1 className='center blue-text'>CTF NOTES KEEPER</h1>
        <AddNote addnotes={this.addnotes}/>
        <Notes  notes={this.state.notes} deletenotes={this.deletenotes} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
