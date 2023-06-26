import React from 'react';
import Note from './Note';

function ReadNotes({notes, showStatus, handleStatusChange}) {

    let filterNotes = (notes, status) => {
        switch (status) {
        case 'all':
            return notes;
        case 'imp':
            return notes.filter(note => note.important === true);
        case 'nonimp':
            return notes.filter(note => note.important === false);
         default:
            return notes;   
        }
    }

  const notesFiltered = filterNotes(notes, showStatus);

  return (
    <div>
        <h1>Read Notes</h1>

        <label>
            <input type='radio' name='filter' value="all" checked={ showStatus === 'all' } onChange={handleStatusChange} />
            Show All Notes
        </label>
        <br/>
        <label>
            <input type='radio' name='filter' value="imp" checked={ showStatus === 'imp' } onChange={handleStatusChange} />
            Show Important Notes
        </label>
        <br/>
        <label>
            <input type='radio' name='filter' value="nonimp" checked={ showStatus === 'nonimp' } onChange={handleStatusChange} />
            Show Non-Important Notes
        </label>
        <br/>
        <ul>
            {notesFiltered.map(note => 
            <Note key={note.id} note={note} />
            )}
        </ul>      
    </div>
  )
}

export default ReadNotes;