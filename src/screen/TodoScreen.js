import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  //Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  //Handle Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  //Handle Add Todo
  const handleAddTodo = () => {
    //Structure of a single todo item
    // {
    //     id:
    //     tittle:
    // }
    setTodoList([...todoList, { id: Date.now().toString(), tittle: todo }]);
    setTodo("");
  };

  //Render Todo
  const rendorTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.tittle}
        </Text>

        <IconButton icon="pencil" iconColor="#fff" />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 12,
          marginVertical: 34,
          alignItems: "center",
        }}
        onPress={() => handleAddTodo()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      {/* Render todo list */}

      <FlatList data={todoList} renderItem={rendorTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
