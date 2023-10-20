import {FC} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days Images</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(e => (
          <PostImage key={`post-image-${e.title}`} {...e} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;