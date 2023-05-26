import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
const Task = (props) => {
  const { number } = props;
  const numberKey = number < 10 ? `0${number}` : number;
  const numberBg = number % 2 === 0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity onPress={props.handleDelete}>
      <View style={styles.task}>
        <Text style={[styles.taskId, numberBg]}>{numberKey}</Text>
        <Text style={styles.taskName}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
