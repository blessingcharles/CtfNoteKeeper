import React from 'react'
import react from 'react';

class AddNote extends react.Component{

    state = {
        description:'',
        contents: ''
    }

    handleChange = (e)=>{
        let target = e.target
        this.setState({
        [target.name] :target.value })
    }

    submitForm = (e)=>{
        e.preventDefault();
        let note = this.state;
        this.props.addnotes(note)


        
    }
    render(){
        return(
            <form onSubmit={this.submitForm}>
                <label >DESCRIPTION:</label>
                <input type='text' onChange={this.handleChange} name='description' value={this.state.description}></input>
                <label >CONTENTS:</label>
                <input type='text' onChange={this.handleChange} name='contents' value={this.state.contents}></input>
                <button>ADD</button>
            </form>
        )
    }

}


export default AddNote ;