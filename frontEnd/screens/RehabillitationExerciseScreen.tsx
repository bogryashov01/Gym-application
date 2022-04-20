// Modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import map from 'lodash/map';

// Components
import { Text, View } from '../components/Themed';

// Engine
import rehabillitationActionsAsync from '../engine/rehabilitation/async-actions';
import rehabillitationTabSelectors from '../engine/rehabilitation/selectors';

// Types
import { RootTabScreenProps } from '../types';

function RehabillitationExerciseScreen({ route }: RootTabScreenProps<'RehabillitationExercise'>) {
  const dispacth = useDispatch();
  const currentExercise = useSelector(rehabillitationTabSelectors.currentExercise);
  const pending = useSelector(rehabillitationTabSelectors.pending);
  const id = route.params.id;

  useEffect(() => {
    dispacth(rehabillitationActionsAsync.getCurrentRehabillitationAsync(id));
  }, [dispacth]);

  return (
    <>
      {pending ? (
        <Text>loading</Text>
      ) : (
        map(currentExercise, (exercise: any) => {
          return (
            <View style={styles.container} key={exercise.id}>
              <Text style={styles.title}>{exercise.name}</Text>
              <Image source={{ uri: `${exercise?.imageUrl}` }} style={styles.image} />
              <Text style={styles.title}>{exercise.descriptions}</Text>
            </View>
          );
        })
      )}
    </>
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
    textAlign: 'center',
    paddingTop: 10,
  },
  description: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
  },
  image: {
    width: '90%',
    height: 300,
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 20,
  },
});

export default RehabillitationExerciseScreen;
