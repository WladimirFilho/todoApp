import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onDeleteItem(props.id)}>
      <View style={styles.goalStyle}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    marginVertical: 7,
    paddingVertical: 10,
    paddingLeft: 15,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "dashed",
  },
  checkBox: {
    backgroundColor: "#bebebe",
    padding: 9,
    marginRight: 15,
  },
  clicked: {
    color: "#fff",
    fontSize: 3,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
