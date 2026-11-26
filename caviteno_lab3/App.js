import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const textInputRef = useRef(null);

  const addToList = () => {
    if (name.trim()) {
      setList([...list, { id: nextId++, name: name }]);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter item"
        placeholderTextColor='grey'
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)} 
        ref={textInputRef}
      />
      <TouchableOpacity onPress={addToList} style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 100,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 324,
    marginRight: 10,
    padding: 10,
    fontFamily: 'courier',
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: '#C82909',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    marginTop: 5,
    padding: 10,
    width: 388,
    backgroundColor: '#FEEBE7',
    color: '#9C2007',
    fontWeight:'bold',
  }
});