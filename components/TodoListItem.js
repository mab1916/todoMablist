import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/AntDesign';

const CheckBox = ({ isChecked, onChecked, }) => {
    return (
        <TouchableOpacity style={todoListItemStyle.todoListItemCheckbox} onPress={onChecked} >
            {/* CheckBox */}
            <Text>
                {isChecked ? <Feather name={'check'} size={15} /> : ""}
            </Text>
        </TouchableOpacity>
    )
}

const EditableText = ({ text, isChecked, onChangeText, isText }) => {
    const [editText, setEditText] = useState(isText);
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => !isChecked && setEditText(true)} >
            {
                editText ?
                    <TextInput
                        value={text}
                        onChangeText={onChangeText}
                        autoFocus={true}
                        placeholder='Add Something New '
                        onSubmitEditing={() => { }}
                        maxLength={20}
                        style={[todoListItemStyle.todoListItemInput, { outline: 'none' }]}
                        underlineColorAndroid={'transparent'}
                        selectionColor={'transparent'}
                        onBlur={() => { setEditText(false) }}
                    />
                    :
                    <Text style={[
                        {
                            color: isChecked ? 'gray' : 'black',
                            textDecorationLine: isChecked ? 'line-through' : 'none'
                        }
                    ]}>{text}</Text>
            }
        </TouchableOpacity>
    )
}

const TodoListItem = ({ text, isChecked, onChecked, onChangeText, onDelete, isText }) => {
    return (
        <View style={todoListItemStyle.todoListItemContainer}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                {/* CheckBox */}
                <CheckBox
                    isChecked={isChecked}
                    onChecked={onChecked}
                />
                <EditableText
                    text={text}
                    isChecked={isChecked}
                    onChangeText={onChangeText}
                    isText={isText}
                />
                <TouchableOpacity onPress={onDelete}>
                    <Text>
                        <AntDesign name={'close'} size={20} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const todoListItemStyle = StyleSheet.create({
    todoListItemContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    todoListItemIcon: {
        padding: 5,
        fontSize: 24,
    },
    todoListItemInput: {
        height: 40,
        fontSize: 15,
        color: 'black',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 5,
    },
    todoListItemCheckbox: {
        width: 20,
        height: 20,
        margin: 2,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default TodoListItem;