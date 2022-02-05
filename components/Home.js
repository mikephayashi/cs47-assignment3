import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "../utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "../utils/constants";
import ConnectButton from "../components/ConnectButton";
import SongTile from "../components/SongTile";
import colors from "../Themes/colors.js";
import { useNavigation } from "@react-navigation/native";

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Home() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    } else {
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  let contentComponent = null;

  if (token) {
    contentComponent = (
      <View style={styles.parentContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/spotify-logo.png")}
          ></Image>
          <Text style={styles.headerText}>My Spotify Tracks</Text>
        </View>
        <FlatList
          data={tracks}
          renderItem={({ item }) => (
            <SongTile item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item["id"]}
        />
      </View>
    );
  } else {
    contentComponent = (
      <ConnectButton promptAsync={promptAsync}></ConnectButton>
    );
  }

  return (
    <SafeAreaView style={styles.container}>{contentComponent}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  parentContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
