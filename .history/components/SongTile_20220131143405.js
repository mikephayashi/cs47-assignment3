import {View, Text} from 'react-native';


const SongTile = ({item}) => {
    return <View style={styles.flex}>
        <Text style={{backgroundColor: 'white'}}>Song</Text>
    </View>;
}

const styles = {
    'flex': {
        flexDirection: 'row',
    },
}

export default SongTile;