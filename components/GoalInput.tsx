import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

type GoalInputProps = {
  GoalModalIsVisible: () => void,
  addGoal:(enterGoalText:string)=>void,
  visible:boolean
};
type EnterText = string

export default function GoalInput({GoalModalIsVisible,addGoal,visible} : GoalInputProps) {
  const [enterGoalText, setEnterGoalText] = useState("");

  function handleChangeText(enterText:EnterText) {
    setEnterGoalText(enterText);
  }
  function handleAddGoal (){
    addGoal(enterGoalText);
    setEnterGoalText("")
  }
  console.log(enterGoalText)
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.GoalInputContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Input new goals"
            onChangeText={handleChangeText}
            value={enterGoalText}
          />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={GoalModalIsVisible}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleAddGoal}>
              <Text style={styles.text}>Add Goal</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  GoalInputContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#B338DB",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    width: "80%",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#49DB30",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 8,
    height: 40,
    margin: 2,
  },
  text: {
    color: "#ffff",
  },
});
