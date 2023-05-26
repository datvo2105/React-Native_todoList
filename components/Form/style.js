import { StyleSheet } from "react-native";
import color from "../../public/color";

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",

    marginBottom: 15,
    marginHorizontal: 10,
  },
  formInput: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: color.dark,

    overflow: "hidden",
    height: 60,
    backgroundColor: color.lightDark,
    padding: 15,

    color: "#fff",
    fontSize: 20,
  },
  formBtn: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,

    overflow: "hidden",
    backgroundColor: color.semiDark,
    width: 60,
    height: 60,
  },
  formIcon: {
    color: color.light,
    fontSize: 40,
    fontWeight: 700,
  },
});
export default styles;
