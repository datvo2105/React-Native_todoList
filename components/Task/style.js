import { StyleSheet } from "react-native";
import color from "../../public/color";

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",

    marginTop: 10,
    marginHorizontal: 10,
  },
  taskId: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: color.dark,

    overflow: "hidden",
    padding: 15,
    fontSize: 20,
    fontWeight: 800,
  },
  odd: {
    backgroundColor: color.dark,
    color: color.light,
  },
  even: {
    backgroundColor: color.lightDark,
    color: color.dark,
  },
  taskName: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: color.dark,

    overflow: "hidden",
    backgroundColor: color.light,
    padding: 15,

    color: color.dark,
    fontSize: 20,
    fontWeight: 600,
  },
});
export default styles;
