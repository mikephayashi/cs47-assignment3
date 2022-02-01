import { View, Text, Image } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinuteSeconds";

// return <View style={styles.flex}>
// <Image source={{uri: item.album.images[2]}}></Image>
// <Text>{item.name}</Text>
// <Text>{item.artists[0].name}</Text>
// <Text>{item.album.name}</Text>
// <Text>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
// </View>;

const SongTile = ({ item, index }) => {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>{index}</Text>
      <Image style={styles.icon} source={{ uri: item.album.images[0] ??  }}></Image>
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
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 40,
    width: '100%'
  },
  songArtist: {
    flexDirection: "column",
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    color: "white",
    fontSize: 10,
  },
  subText: {
    color: "white",
    fontSize: 10,
  },
};
export default SongTile;
