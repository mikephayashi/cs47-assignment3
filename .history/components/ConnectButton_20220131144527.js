import { Button } from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <Button title="Connect With Spotify" onPress={() => promptAsync()}></Button>
  );
};

const styles = {
  
}

export default ConnectButton;
