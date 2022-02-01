import { Button } from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <Button style={styles.connect} title="Connect With Spotify" onPress={() => promptAsync()}>
      <Image></Image>
    </Button>
  );
};

const styles = {
  connect: {

  },
}

export default ConnectButton;
