import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import { StatusBar } from 'react-native';
import { ApiService } from './Services/ApiService';
import { TodoService, ToDoService } from './Services/ToDoServices';

export default class App extends React.Component {

  state = {
    list: []
  }

  async componentDidMount(){
    const list =  await ToDoService.list();
    this.setState(list);
  }

  add = async(text) =>{ // mantém escopo da função (arrow function)
    const newItem = await TodoService.create({text});
    const list = [...this.state.list, newItem];
    this.setState({list});
  }

  remove = async(item) =>{ 
    await TodoService.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id)
    this.setState(list);
  }

  render(){
    const {state} = this;
    return (
      <View style={styles.container}>
        <Form onAdd={this.add}/>
        <ToDoList list={state.list} onRemove={this.remove}/>
        <StatusBar/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
