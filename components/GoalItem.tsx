import { Pressable, StyleSheet, Text, View } from "react-native";
// type CourseGoal = {
//   text:string,
//   id:string
// }
// type goalListProps = {
//     courseGoal:CourseGoal[]
// }
type GoalData = {
  text:string,
  id:string,
  onDeleteGoal:(id:string)=>void
}

export default function GoalItem(props:GoalData) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color:"#210644"}}
        style={({pressed})=>pressed&& styles.pressedItem}
        onPress={()=> props.onDeleteGoal(props.id)}
      >
        <Text style={styles.Item}>{props.text}</Text>
      </Pressable>
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
    borderRadius: 4,
    borderColor: "#ffffff",
    backgroundColor: "#46DB7F",
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedItem:{
    opacity:0.5
  }
});
