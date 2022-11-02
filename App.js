import { StyleSheet, Text, View, FlatList } from "react-native";

import { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  //Set State
  const [listOfGoals, setListOfGoals] = useState([]);
  const [startup, setStartup] = useState(true);

  useEffect(() => {
    if (startup === true) {
      readItems();
      setStartup(false);
    }
  }, [startup]);

  useEffect(() => {
    if (listOfGoals.length >= 0 && startup === false) {
      saveItems();
    }
  }, [listOfGoals]);

  //Function to set new item in the array of goal
  function addGoalHandler(inputNewGoal) {
    setListOfGoals(
      listOfGoals.concat({ text: inputNewGoal, id: new Date().getTime() })
    );
  }

  //Function to delete Items
  function deleteGoalHandler(id) {
    let array = listOfGoals;
    let toKeep = array.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setListOfGoals([...toKeep]);
  }

  // function to save items into storage
  const saveItems = async () => {
    // console.log('saving items...')
    const data = JSON.stringify(listOfGoals);
    // use asyncstorage to store data
    try {
      await AsyncStorage.setItem("ListData", data);
    } catch (error) {
      console.log(error);
    }
  };

  // function to read items from storage
  const readItems = async () => {
    // console.log('loading data...')
    let data = await AsyncStorage.getItem("ListData");
    data = data !== null ? JSON.parse(data) : [];
    setListOfGoals(data);
  };

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
