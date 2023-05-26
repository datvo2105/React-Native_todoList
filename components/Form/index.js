import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  InputAccessoryView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Form = (props) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.length === 0) {
      alert("Please enter a task!!!");
      return false;
    }
    // alert("Add task success!!!");
    props.onSubmit(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.form}>
        <TextInput
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
          style={styles.formInput}
          placeholder="Task..."
        ></TextInput>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.formBtn}>
            <Text style={styles.formIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Form;
