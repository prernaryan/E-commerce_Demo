import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '../../services/navigationService';
import {RouteName} from '../../constants';
import {SCREEN_WIDTH} from '../../utils/responsive';
import {deleteNote} from '../../redux/slice/notesSlice';

const NotesList = () => {
  const notes = useSelector(state => state.notes.notes);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const dispatch = useDispatch();

  const toggleSelectNote = item => {
    if (selectedNotes.includes(item.id)) {
      setSelectedNotes(selectedNotes.filter(id => id !== item.id));
    } else {
      setSelectedNotes([...selectedNotes, item.id]);
    }
  };
  const renderNoteItem = ({item}) => {
    const isSelected = selectedNotes.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.noteItem, isSelected && styles.selectedNoteItem]}
        onLongPress={() => toggleSelectNote(item)}
        onPress={() => navigate(RouteName.LOGIN, {item})}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };

  const deleteSelectedNotes = () => {
    selectedNotes.forEach(noteId => {
      const noteToDelete = notes.find(note => note.id === noteId);
      if (noteToDelete) {
        dispatch(deleteNote(noteToDelete));
      }
    });
    setSelectedNotes([]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={() => navigate(RouteName.LOGIN)} />
      {selectedNotes.length > 0 && (
        <Button title="Delete Selected Notes" onPress={deleteSelectedNotes} />
      )}
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNoteItem}
        numColumns={2}
        horizontal={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No notes found. Add a new note!</Text>
        )}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 70,
  },
  noteItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: SCREEN_WIDTH / 2 - 32,
    marginHorizontal: 8,
  },
  selectedNoteItem: {
    backgroundColor: '#c1e1c5', // Highlight selected note
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#777',
  },
});
