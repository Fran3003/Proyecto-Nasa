import {Text, View, StyleSheet, Image, Button} from 'react-native';
import {PostImage} from '../../types';
import {FC} from 'react';


const TodaysImage: FC<PostImage> = ({date, title, url}) => {

    return(
        <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.containerButton}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2c449d',
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 32,
      padding: 16,
    },
    image: {
      width: '100%',
      height: 190,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 32,
    },
    containerButton: {
      alignItems: 'flex-end',
    },
    title: {
      color: 'white',
      fontSize: 20,
      marginVertical: 12,
      fontWeight: 'bold',
    },
    date: {
      color: 'white',
      fontSize: 16,
    },
  });

export default TodaysImage;