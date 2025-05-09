import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNote, editNote} from '../../../redux/slice/notesSlice';
import {navigate} from '../../../services/navigationService';
import {RouteName} from '../../../constants';
import {useRoute} from '@react-navigation/native';

export default function AddNoteScreen({navigation}) {
  const {params} = useRoute();
  const {item} = params ?? {};
  console.log(item, 'route');

  const [title, setTitle] = useState(item?.title ?? '');
  const [description, setDescription] = useState(item?.description ?? '');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title === '' || description === '') {
      return Alert.alert('Error', 'Please fill in both fields');
    }
    if (item) {
      dispatch(editNote({id: item.id, title, description}));
      navigate(RouteName.NOTES_LIST);
    } else {
      dispatch(addNote({title, description}));
      Alert.alert('Success', 'Note added successfully');
      navigate(RouteName.NOTES_LIST); // Navigate back to the home screen
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title={item ? 'Edit Note' : 'Add Note'} onPress={handleAddNote} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 70,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});
