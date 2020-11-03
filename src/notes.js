import React from 'react'

const Notes = ({notes,deletenotes})=> {
    
    const notes_list = notes.length ? (
        notes.map(
            (note)=>{
                return(<tr className = 'collection-item green-text' key = {note.id} >
                    <td>{note.description}</td>
                    <td>{note.contents}</td>
                    <button onClick={()=>{deletenotes(note.id)}} className='red-text'>Delete notes</button>
                </tr>) 
        })
    ):
    (
        <p className='center red-text'>NO NOTES TO SHOW UP</p>
    ) ;

    return(
        <div className='todos collection'>
        <table class='responsible'>
        <thead>
          <tr>
              <th>DESCRIPTION</th>
              <th>CONTENT</th>
              <th>DELETE NOTES</th>
          </tr>
        </thead>

        <tbody>

            {notes_list}

        </tbody>
        </table>
        </div>
        
    );
};


export default Notes ;