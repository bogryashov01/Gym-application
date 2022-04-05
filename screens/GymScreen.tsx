// Modules
import { useEffect } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash/map';

// Components
import { Text, View } from '../components/Themed';

// Engine
import gymActionsAsync from '../engine/gym/async-actions';
import gymTabSelectors from '../engine/gym/selectors';

// Types
import { GymScreenProps } from '../types';

function GymScreen({ navigation }: GymScreenProps<'Gym'>) {
  const dispatch = useDispatch();
  const gymExercise = useSelector(gymTabSelectors.gymExercise);

  useEffect(() => {
    if (!gymExercise.length) {
      dispatch(gymActionsAsync.getGymExerciseAsync());
    }
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {gymExercise.length === 0 ? (
        <View style={styles.notFound}>
          <Text style={styles.title}>No items found</Text>
          <Text style={styles.title}>Please refresh application</Text>
        </View>
      ) : (
        map(gymExercise, (exercise: any, index: number) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('GymExerciseScreen', { id: exercise.id })}
              key={index}
            >
              <View style={styles.gymExercise}>
                <Image source={{ uri: `${exercise.imageUrl}` }} style={{ width: 30, height: 30 }} />
                <Text style={styles.title}>{exercise.name}</Text>
              </View>
            </Pressable>
          );
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF3C00',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  gymExercise: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 25,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3C00',
    height: '100%',
  },
});

export default GymScreen;
