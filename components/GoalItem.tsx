import { StyleSheet, Text, View } from "react-native";
// type CourseGoal = {
//   text:string,
//   id:string
// }
// type goalListProps = {
//     courseGoal:CourseGoal[]
// }
type GoalData = {
  text:string,
  id:string
}

export default function GoalItem(props:GoalData) {
  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  Item: {
    padding: 4,
    color: "#ffffff",
    borderRadius: 20,
    borderColor: "#ffffff",
    backgroundColor: "#46DB7F",
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
