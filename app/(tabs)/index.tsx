import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
type CourseGoal = {
  text: string;
  id: string;
};

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [courseGoal, setCourseGoal] = useState<CourseGoal[]>([]);
  function startAddGoalModal() {
    setModalVisible(true);
  }
  function GoalModalIsVisible() {
    setModalVisible(false);
  }
  function addGoalHandler(enterGoalText: string) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
    GoalModalIsVisible();
  }
  const renderGoalItem: ListRenderItem<CourseGoal> =(({item})=>{
    return <GoalItem text={item.text} id={item.id} />
  })
  console.log(courseGoal);

  return (
    <View style={styles.appContainer}>
      <View style={styles.AddGoalContainer}>
        <Pressable onPress={startAddGoalModal} style={styles.buttonAddGoal}>
          <Text style={styles.text}>ADD NEW GOAL</Text>
        </Pressable>
      </View>
      <GoalInput
        GoalModalIsVisible={GoalModalIsVisible}
        addGoal={addGoalHandler}
        visible={modalVisible}
      />
      <View style={styles.goalContainer}>
        <FlatList<CourseGoal>
          data={courseGoal}
          keyExtractor={(item) => item.id}
          renderItem={renderGoalItem}
        />
      </View>
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
  goalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
