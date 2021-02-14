import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{props.item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    itemText: {
        marginLeft: 10,
    }
})

export default TodoItem;