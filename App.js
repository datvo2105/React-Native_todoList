import React, { useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";
import styles from "./App.componets.style";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const removeTask = (index) => {
    Alert.alert("Notification", "Do you want delete this task?", [
      {
        text: "OK",
        onPress: () => {
          let newTaskList = [...taskList];
          newTaskList.splice(index, 1);
          setTaskList(newTaskList);
        },
      },
      {
        text: "Cancel",
        onPress: () => {},
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>Todo List</Text>
      </View>
      <ScrollView>
        {taskList.map((value, index) => {
          return (
            <Task
              handleDelete={() => {
                removeTask(index);
              }}
              key={index}
              number={index + 1}
              name={value}
            />
          );
        })}
      </ScrollView>
      <Form onSubmit={addTask} />
    </View>
  );
}
