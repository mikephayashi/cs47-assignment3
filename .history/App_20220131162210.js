import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import colors from "./Themes/colors.js";
import ConnectButton from "./components/ConnectButton";
import SongTile from "./components/SongTile";

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
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
      console.log("token set");
    } else {
      console.log("token not set");
    }
  }, [response]);

  useEffect(() => {
    console.log("starting");
    if (token) {
      // TODO: Select which option you want: Top Tracks or Album Tracks

      // Comment out the one you are not using
      // myTopTracks(setTracks, token);
      albumTracks(ALBUM_ID, setTracks, token);
      console.log("working");
    }
  }, [token]);

  let contentDisplayed = null;
  // if (token) {
  //   contentDisplayed = <FlatList data={tracks} renderItem={SongTile} keyExtractor={(item, index) => item['id']}/>;
  //   // contentDisplayed = <Text>Test</Text>
  //   console.log('list');
  //   console.log(tracks);
  // } else {
  //   contentDisplayed = (
  //     <ConnectButton promptAsync={promptAsync}></ConnectButton>
  //   );
  //   console.log('button');
  // }

  <View>
    <View>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../assets/spotify-logo.png")}
      ></Image>
      <Text>My Spotify Tracks</Text>
    </View>
  </View>;

  contentDisplayed = (
    <FlatList
      data={[
        {
          id: 1,
          album: {
            name: "Rockstar",
            images: [
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
            ],
          },
          name: "Congratulations",
          artists: [
            {
              name: "Post",
            },
          ],
          duration_ms: 200000,
        },
        {
          id: 2,
          album: {
            name: "Rockstar",
            images: [
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
              "https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d",
            ],
          },
          name: "Congratulations",
          artists: [
            {
              name: "Post",
            },
          ],
          duration_ms: 200000,
        },
      ]}
      renderItem={SongTile}
      keyExtractor={(item, index) => item["id"]}
    />
  );

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
