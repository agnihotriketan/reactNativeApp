import React, { useState } from "react";
import { StyleSheet, Button, Modal } from "react-native";
import { View, TextInput } from "../components/Themed";

const GoalInput = (props: any) => {
  const [goalText, SetGoalText] = useState<string>();
  const goalTextHandler = (obj: string) => {
    SetGoalText(obj);
  };

  const addHandler = () => {
    props.onAddGoal(goalText);
    SetGoalText("");
  };

  const cancelHandler = () => {
    props.onCancel();
    SetGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.addInput}>
        <TextInput
          placeholder="Enter your text..."
          style={styles.inputTextBox}
          value={goalText}
          onChangeText={goalTextHandler}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Text" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="gray" onPress={cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addInput: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  inputTextBox: {
    width: "80%",
    borderBottomColor: "black",
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
