import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //Set State

  const [listOfGoals, setListOfGoals] = useState([]);

  //Function to set new item in the array of goals
  function addGoalHandler() {
    setListOfGoals((currentListOfGoals) => [
      ...currentListOfGoals,
      { text: inputNewGoal, id: Math.random().toString() },
    ]);
    console.log(inputNewGoal);
  }
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View>
        <Text style={styles.appTitle}>My TO-DOs!</Text>
      </View>

      {/*Input Text Container*/}
      <GoalInput onAddGoal={addGoalHandler} />

      {/*FlatList Goals Handler*/}
      <FlatList
        style={styles.goalsContainer}
        data={listOfGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    marginHorizontal: "10%",
  },
  appTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },

  goalsContainer: {
    flex: 1,
    marginTop: 20,
  },
});
