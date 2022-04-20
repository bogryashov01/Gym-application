// Modules
import { useEffect } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash/map';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// Engine
import AsyncActions from '../engine/rehabilitation/async-actions';
import rehabillitationTabSelectors from '../engine/rehabilitation/selectors';

function RehabillitationScreen({ navigation }: RootTabScreenProps<'Rehabillitation'>) {
  const dispatch = useDispatch();
  const rehabilitationExercises = useSelector(rehabillitationTabSelectors.rehabillitations);

  useEffect(() => {
    if (!rehabilitationExercises.length) {
      console.log(rehabilitationExercises);
      dispatch(AsyncActions.getRehabillitationsAsync());
    }
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {rehabilitationExercises.length === 0 ? (
        <View style={styles.notFound}>
          <Text style={styles.title}>No items found</Text>
          <Text style={styles.title}>Please refresh application</Text>
        </View>
      ) : (
        map(rehabilitationExercises, (exercise: any) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('RehabillitationExercise', { id: exercise.id })}
              key={exercise.id}
            >
              <View key={exercise.id} style={styles.exercise}>
                <Text style={styles.title}>{exercise.name}</Text>
                <Image source={{ uri: `${exercise.imageUrl}` }} style={{ width: 30, height: 30 }} />
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
    backgroundColor: '#52D2C3',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52D2C3',
    height: '100%',
  },
  exercise: {
    marginTop: 10,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default RehabillitationScreen;
