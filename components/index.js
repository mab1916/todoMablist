import React, { useLayoutEffect, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListButton = ({ name, navigation, onPress, onDelete, onOptions }) => {
    return (
        <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: 'skyblue' }]}
            onPress={onPress}
        >
            <View>
                <Text style={styles.itemTitle}>{name}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={onOptions}>
                    <AntDesign name={'edit'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <AntDesign name={'delete'} size={25} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const renderAddListIcon = (navigation, addItem) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { saveChanges: addItem })} >
                <AntDesign style={styles.icon} name={'pluscircleo'} />
            </TouchableOpacity>
        </View>
    );
};

const ToDoList = ({ navigation }) => {
    const [lists, setLists] = useState([
        { name: 'Google' },
        { name: 'Google+' },
        { name: 'Gmail' },
    ]);

    const addItemToLists = (item) => {
        lists.push(item);
        setLists([...lists]);
    };

    const removeItemFromLists = (index) => {
        lists.splice(index, 1);
        setLists([...lists]);
    };

    const updateItemFromLists = (index, item) => {
        lists[index] = item;
        setLists([...lists]);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddListIcon(navigation, addItemToLists),
        });
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={lists}
                renderItem={({ item: { name, index } }) => {
                    return (
                        <ListButton
                            name={name}
                            navigation={navigation}
                            onPress={() => { navigation.navigate("ToDoList", { name }); }}
                            onOptions={() => {
                                navigation.navigate("Edit",
                                    { name, saveChanges: (item) => updateItemFromLists(index, item) });
                            }}
                            onDelete={() => removeItemFromLists(index)}
                        />
                    );
                }}
            />
        </View>
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        padding: 5,
        fontSize: 25,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
