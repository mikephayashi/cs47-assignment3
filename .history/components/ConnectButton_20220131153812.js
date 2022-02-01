import { Button } from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <Button style={styles.connect} title="Connect With Spotify" onPress={() => promptAsync()}>
      <Image source={{'../assets/spotify-logo.png'}}></Image>
    </Button>
  );
};

const styles = {
  connect: {

  },
}

export default ConnectButton;
