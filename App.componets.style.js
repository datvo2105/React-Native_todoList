import { StyleSheet } from "react-native";
import color from "./public/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light,
  },
  top: {
    marginTop: 60,
    marginBottom: 10,

    alignItems: "center",
  },
  textTop: {
    fontSize: 30,
    color: color.semiDark,
    fontWeight: 700,
  },
});
export default styles;
