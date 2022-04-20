/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Rehabillitation: {
            screens: {
              Rehabillitation: 'Rehabillitation',
            },
          },
          Gym: {
            screens: {
              GymScreen: 'Gym',
            },
          },
          GymExerciseScreen: {
            screens: {
              GymExerciseScreen: 'GymExerciseScreen',
            },
          },
          RehabillitationExercise: {
            screens: {
              RehabillitationExercise: 'RehabillitationExercise',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
