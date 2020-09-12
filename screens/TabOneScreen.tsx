import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  // ScrollView,
  FlatList,
  I18nManager,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, TextInput } from "../components/Themed";
import GoalListItem from "../components/GoalListItem";
import GoalInput from "../components/GoalInput";

interface goalObject {
  key: string;
  value: string;
}

export default function TabOneScreen() {
  const [goalArr, SetGoalArr] = useState<goalObject[]>([]);
  const [IsAddMode, SetIsAddMode] = useState<boolean>(false);

  console.log("rendering");
  console.log(goalArr);

  const addGoal = (goalText: string) => {
    SetGoalArr((g: any) => [
      ...goalArr,
      { key: Math.random().toString(), value: goalText },
    ]);
    SetIsAddMode(false);
  };

  const removeGoalHandler = (goalId: string) => {
    console.log("To be deleted" + goalId);
    SetGoalArr((c) => {
      return goalArr.filter((g) => g.key != goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    SetIsAddMode(false);
  };
  return (
    // <ScrollView></ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native Components</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      <View style={styles.inputDiv}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add new goal" onPress={() => SetIsAddMode(true)} />
          </View>
        </View>
        <GoalInput
          visible={IsAddMode}
          onCancel={cancelAddGoalHandler}
          onAddGoal={addGoal}
        />
      </View>
      {/* <View style={styles.Flex}>
          {goalArr.map((goal) => (
            <View key={goal} style={styles.ListItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </View> */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goalArr}
        renderItem={(itemData) => (
          <GoalListItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
      {/* <Text style={styles.title}>Flex Direction</Text>
      <View style={styles.Flex}>
        <View style={styles.RedBox}>
          <Text>1</Text>
        </View>
        <View style={styles.GreenBox}>
          <Text>2</Text>
        </View>
        <View style={styles.BlueBox}>
          <Text>3</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  Flex: {
    padding: 20,
    flexDirection: "row",
    alignItems: "stretch",
  },
  RedBox: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    flex: 10,
  },
  GreenBox: {
    backgroundColor: "darkgreen",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  BlueBox: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  inputDiv: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  button: {
    width: "90%",
  },
});
