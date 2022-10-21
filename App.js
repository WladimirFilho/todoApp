import { StyleSheet, Text, View, FlatList } from "react-native";

import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //Set State
  const [listOfGoals, setListOfGoals] = useState([]);

  //Function to set new item in the array of goals
  function addGoalHandler(inputNewGoal) {
    setListOfGoals((currentListOfGoals) => [
      ...currentListOfGoals,
      { text: inputNewGoal, id: Math.random().toString() },
    ]);
  }

  //Function to delete Items
  function deleteGoalHandler(id) {
    setListOfGoals((currentListOfGoals) => {
      return currentListOfGoals.filter((goal) => goal.id !== id);
    });
    console.log("deleted");
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
          return (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          );
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
