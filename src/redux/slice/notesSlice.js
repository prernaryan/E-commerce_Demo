import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [], // Array to store notes
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Date.now(), // Generate a unique ID
        title: action.payload.title,
        description: action.payload.description,
      };
      state.notes.push(newNote); // Add the new note to the array
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    },
    editNote: (state, action) => {
      const updatedNote = state.notes.find(
        note => note.id === action.payload.id,
      );
      if (updatedNote) {
        updatedNote.title = action.payload.title;
        updatedNote.description = action.payload.description;
      }
    },
  },
});

export const {addNote, deleteNote, editNote} = notesSlice.actions;

export default notesSlice.reducer;
