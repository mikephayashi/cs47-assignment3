import { Button } from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <Button title="Connect With Spotify" onPress={() => promptAsync()}></Button>
  );
};

export default ConnectButton;
