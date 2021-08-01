import React, { useState, useLayoutEffect, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import TodoListItem from "../components/TodoListItem";
import AntDesign from 'react-native-vector-icons/AntDesign';

const renderAddListIcon = (addItem) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => addItem({ text: "", isChecked: false, isText: true })} >
                <AntDesign style={styles.icon} name={'pluscircleo'} />
            </TouchableOpacity>
        </View>
    );
};

const ToDoListScreen = ({ navigation }) => {
    const [toDoItems, setToDoItems] = useState([{text: 'New List', isChecked: false}]);

    const addItemToLists = (item) => {
        toDoItems.push(item);
        setToDoItems([...toDoItems]);
    };

    const removeItemFromLists = (index) => {
        toDoItems.splice(index, 1);
        setToDoItems([...toDoItems]);
    };

    const updateItemFromLists = (index, item) => {
        toDoItems[index] = item;
        setToDoItems([...toDoItems]);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddListIcon(addItemToLists),
        });
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={toDoItems}
                renderItem={({item: { text, isChecked, isText }, index,}) => {
                    return (
                        <TodoListItem
                            text={text}
                            isChecked={isChecked}
                            onChecked={() => {
                                const toDoItem = toDoItems[index];
                                toDoItem.isChecked = !isChecked;
                                updateItemFromLists(index, toDoItem);
                            }}
                            onChangeText={(newText) => {
                                const toDoItem = toDoItems[index];
                                toDoItem.text = newText;
                                updateItemFromLists(index, toDoItem);
                            }}
                            onDelete={() => {
                                removeItemFromLists(index);
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default ToDoListScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        padding: 5,
        fontSize: 25,
    },
});
