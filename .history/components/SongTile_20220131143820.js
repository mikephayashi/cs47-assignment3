import {View, Text} from 'react-native';


const SongTile = ({item}) => {
    return <View style={styles.flex}>
        <Image source={{uri: item.album.images[2]}}></Image>
        <Text>{item.name}</Text>
    </View>;
}

const styles = {
    'flex': {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
}

export default SongTile;