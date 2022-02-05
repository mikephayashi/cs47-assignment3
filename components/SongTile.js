import { View, Text, Image, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinuteSeconds";
import { AntDesign } from "@expo/vector-icons";

const SongTile = ({ item, navigation }) => {

  const pushPreviewScreen = (e) => {
    e.stopPropagation();
    console.log(item);
    navigation.navigate('Preview', {url:item.preview_url});
  }

  const pushDetailsScreen = (e) => {
    navigation.navigate('Detailed', {url:item.external_urls.spotify});
  }

  return (
    <Pressable onPress={pushDetailsScreen}>
      <View style={styles.flex}>
      <Pressable onPress={pushPreviewScreen}>
        <AntDesign name="play" size={24} color="green" />
      </Pressable>
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
    </Pressable>
    
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
    padding: 10,
  },
  subText: {
    color: "white",
    fontSize: 10,
  },
};
export default SongTile;
