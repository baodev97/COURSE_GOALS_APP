import GoalInput from "@/components/GoalInput";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  function startAddGoalModal() {
    setModalVisible(true);
  }
  function GoalModalIsVisible(){
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.AddGoalContainer}>
        <Pressable onPress={startAddGoalModal} style={styles.buttonAddGoal}>
          <Text style={styles.text}>ADD NEW GOAL</Text>
        </Pressable>
      </View>
      {modalVisible ? (
        <GoalInput
          GoalModalIsVisible={GoalModalIsVisible}
        />
      ) : (
        <></>
      )}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#B338DB",
    paddingTop: 60,
    //justifyContent: "center",
    //alignItems: "center",
  },
  AddGoalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddGoal: {
    backgroundColor: "#49DB30",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    padding: 8,
    width: "80%",
  },
  text: {
    color: "#ffffff",
  },
});
