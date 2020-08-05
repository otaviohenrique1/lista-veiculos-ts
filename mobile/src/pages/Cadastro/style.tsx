import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        height: Constants.statusBarHeight + 20,
        display: "flex",
        alignSelf: "center",
    }
});