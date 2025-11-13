import GoalInput from "@/components/GoalInput";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
type CourseGoal = {
  text:string,
  id:string
}
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
      { text: enterGoalText, id: Math.random().toString()},
    ]);
    GoalModalIsVisible()
  }
  console.log(courseGoal)
  return (
    <View style={styles.appContainer}>
      <View style={styles.AddGoalContainer}>
        <Pressable onPress={startAddGoalModal} style={styles.buttonAddGoal}>
          <Text style={styles.text}>ADD NEW GOAL</Text>
        </Pressable>
      </View>
      {modalVisible ? (
        <GoalInput GoalModalIsVisible={GoalModalIsVisible} addGoal={addGoalHandler} />
      ) : (
        <></>
      )}
      <View style={styles.goalItem}>
        <FlatList
          data={courseGoal}
          renderItem={({item})=> <Text style={styles.Item}>{item.text}</Text>}
          keyExtractor={item=>item.id}
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
  goalItem:{
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10
  },
  Item:{
    padding:4,
    color:"#ffffff",
    borderRadius:20,
    borderColor:"#ffffff",
    backgroundColor:"#46DB7F",
    margin:2,
    justifyContent:"center",
    alignItems:"center"
  }
});
