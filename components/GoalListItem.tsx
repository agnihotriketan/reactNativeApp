import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

import { Text, View, TextInput } from "../components/Themed";

const GoalListItem = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.ListItemContainer}>
        <View style={styles.ListItem}>
          <Text>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItemContainer: {
    padding: 10,
    marginVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    // alignSelf: "flex-start",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  ListItem: {
    width: "90%",
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
});

export default GoalListItem;
