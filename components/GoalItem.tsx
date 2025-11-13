import { FlatList, StyleSheet, Text, View } from "react-native";
type CourseGoal = {
  text:string,
  id:string
}
type goalListProps = {
    courseGoal:CourseGoal[]
}

export default function GoalItem({courseGoal}:goalListProps) {
  return (
    <View style={styles.goalItem}>
      <FlatList
        data={courseGoal}
        renderItem={({ item }) => <Text style={styles.Item}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
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
