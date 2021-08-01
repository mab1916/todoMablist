import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoList from "./components";
import ToDoListScreen from "./components/ToDoListScreen";
import EditList from "./components/EditList";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Mab ToDo List" component={ToDoList} />
                <Stack.Screen
                    name="ToDoList"
                    component={ToDoListScreen}
                    options={({ route }) => {
                        return ({
                            title: route.params.name,
                        })
                    }}
                />
                <Stack.Screen
                    name="Edit"
                    component={EditList}
                    options={({route}) => {
                        return ({
                            title: route.params.name ? `Edit ${route.params.name} Folder` : "Create a new List Folder",
                        })
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

