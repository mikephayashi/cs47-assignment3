import {View, Text} from 'react-native';


const SongTile = ({item}) => {
    return <View style={styles.flex}>
        <Image></Image>
    </View>;
}

const styles = {
    'flex': {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
}

export default SongTile;