import { View, Text, Image } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinuteSeconds";

const SongTile = ({ item, index }) => {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>{index}</Text>
      <Image
        style={styles.icon}
        source={{ uri: item.album.images[0].url ?? "" }}
      ></Image>
      <View style={styles.songArtist}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.subText}>{item.artists[0].name}</Text>
      </View>
      <Text style={styles.text}>{item.album.name}</Text>
      <Text style={styles.text}>
        {millisToMinutesAndSeconds(item.duration_ms)}
      </Text>
    </View>
  );
};

const styles = {
  flex: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
  songArtist: {
    flexDirection: "column",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 10,
    flex: 1,
  },
  subText: {
    color: "white",
    fontSize: 10,
  },
};
export default SongTile;
