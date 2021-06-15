/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from './components/TodoInsert';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

Icon.loadFont();


const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appTitle: {
    color: '#444',
    fontSize: 36,
    marginTop: 40,
    marginBottom: 30,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
    // backgroundColor: '#f29d4c',
    fontFamily: 'Pangolin',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;