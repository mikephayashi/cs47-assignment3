import {View, Text, Image} from 'react-native';
import millisToMinutesAndSeconds from '../utils/millisToMinuteSeconds';


const SongTile = ({item}) => {
    return <View style={styles.flex}>
        <Image source={{uri: item.album.images[2]}}></Image>
        <Text>{item.name}</Text>
        <Text>{item.artists[0].name}</Text>
        <Text>{item.album.name}</Text>
        <Text>{millisToMinutesAndSeconds(item.duration_ms)}</Text> 
    </View>;

return <View style={styles.flex}>
<Text style={styles.text}>1</Text>
<Image style={styles.icon} source={{uri: 'https://i.scdn.co/image/ab67616d000048514ab2520c2c77a1d66b9ee21d'}}></Image>
<View style={styles.songArtist}>
  <Text style={styles.text}>Song</Text>
  <Text style={styles.subText}>Artist</Text>
</View>
<Text style={styles.text}>Album</Text>
<Text style={styles.text}>2:33</Text> 
</View>;
}

const styles = {
    'flex': {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
}

export default SongTile;