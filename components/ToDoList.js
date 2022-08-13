import React, { Component } from "react";
import { FlatList, View, Button, Text } from "react-native";

class ToDoList extends Component {

    static defaultProps = {

        list: [],

        onRemove: () =>{

        }
    }

    //função que controla a estrutura a lista
    handleRow = ({ item, index }) => {
        console.log(item)
        return (
            <View style={{flexDirection: 'row', margin: 5}}>
                <Text style={{ color: "blue", flex: 1}}> 
                {this.formatListNumber(index)} - {item.description} 
                </Text>
                <Button title="delete" color={"red"} onPress={()=> this.props.onRemove(item)}/>
            </View>
        )
    }

    

    // formata id da posição d array
    formatListNumber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-digits) // recebe +1 por que pega a posição do array, que inicia com 0
        // .slice retira duas(digits de casas) casas da direita pra esquerda

    }

    render() {

        const { props } = this;
        const keyExtractor = item => item.id;
        return (
            <View>
                <Text>
                    <FlatList
                        data={props.list}
                        keyExtractor={keyExtractor}
                        renderItem={(item) => this.handleRow(item)}
                    />
                </Text>
            </View>
        )
    };
}

export default ToDoList;