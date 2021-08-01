import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

const EditList = ({ navigation, route }) => {
    const [name, setname] = useState(route.params.name || "");
    const [isValid, setValidity] = useState(true);

    return (
        <View style={styles.container}>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.label}>List Name</Text>
                    {!isValid && (
                        <Text
                            style={{
                                marginLeft: 4,
                                color: 'red',
                                fontSize: 12,
                            }}
                        >
                            List Name cannot be empty
                        </Text>
                    )}
                </View>
                <TextInput
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={name}
                    onChangeText={(text) => {
                        setname(text);
                        setValidity(true);
                    }}
                    placeholder={"New List Name"}
                    maxLength={20}
                    style={[styles.input, { outline: "none" }]}
                />
            </View>
            <TouchableOpacity
                style={styles.saveButton} onPress={() => {
                    if (name.length > 1) {
                        route.params.saveChanges({ name });
                        navigation.dispatch(CommonActions.goBack());
                    } else {
                        setValidity(false);
                    }
                }}
            >
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        justifyContent: "space-between",
    },
    input: {
        color: 'gray',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 40,
        fontSize: 24,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: 'gray',
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
    button: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: 'gray',
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    text: { color: "white", fontSize: 24, fontWeight: "bold" },
});
