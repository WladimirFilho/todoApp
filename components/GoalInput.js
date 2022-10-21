import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [inputNewGoal, setInputInputNewGoal] = useState("");
  //Function to handle key input
  function goalInputHandler(enteredText) {
    setInputInputNewGoal(enteredText);
    console.log(inputNewGoal);
  }

  function addGoalHandle() {
    props.onAddGoal();
  }

  return (
    <View style={styles.textContainer}>
      {/*onChangeText calls function that store value from input*/}
      {/*onChangeText sets the value using the setInputInputNewGoal and setting a variable as parameter. That variable stores returns the result of setInputInputNewGoal, and inputNewGoal becomes the new value that came from the variable   */}
      <TextInput
        style={styles.textInput}
        placeholder={"Your course goal"}
        onChangeText={goalInputHandler}
        underlineColorAndroid={"transparent"}
        autoCorrect={false}
      />
      {/*OnPress call function that adds gaol in the list*/}
      <TouchableOpacity style={styles.btnTouch} onPress={props.onAddGoal}>
        <Text style={styles.btnTouchText}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textInput: {
    paddingLeft: 10,
    backgroundColor: "#cccccc",
    borderColor: "#959595",
    borderWidth: 0.5,
    borderRadius: 5,
    color: "#000000",
    width: "68%",
    padding: 5,
  },
  btnTouch: {
    borderRadius: 5,
    height: "100%",
    width: "30%",
    fontWeight: "bold",
    fontSize: 8,
    borderWidth: 0.5,
    borderColor: "#959595",
  },
  btnTouchText: {
    color: "#959595",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
  },
});
