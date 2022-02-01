import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => promptAsync()}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/spotify-logo.png")}
        ></Image>
        <Text style={styles.text}>Connect With Spotify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    width: 300,
    height: 40,
    borderRadius: 99999,
    backgroundColor: "#14ac4c",
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItem: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default ConnectButton;
