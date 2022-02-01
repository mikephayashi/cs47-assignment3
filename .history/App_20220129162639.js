import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import colors from "./Themes/colors.js";
import ConnectButton from "./components/ConnectButton";
import SongTile from "./components/SongTile";
import { FlatList } from "react-native-web";

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function App() {
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
    console.log('test');
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // TODO: Select which option you want: Top Tracks or Album Tracks

      // Comment out the one you are not using
      // myTopTracks(setTracks, token);
      albumTracks(ALBUM_ID, setTracks, token);
      console.log('test');
    }
  }, [token]);

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <FlatList data={tracks} renderItem={SongTile} />;
  } else {
    contentDisplayed = (
      <ConnectButton promptAsync={promptAsync}></ConnectButton>
    );
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
