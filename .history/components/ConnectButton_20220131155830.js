import { Button } from "react-native";

const ConnectButton = ({ promptAsync }) => {
  return (
    <Button style={styles.connect} title="Connect With Spotify" onPress={() => promptAsync()}>
      <Image source={'../assets/spotify-logo.png'}></Image>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    width:300, 
    height:40,
    borderRadius: 99999,
    backgroundColor: '#14ac4c',
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItem: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ConnectButton;
