// Modules
import { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import map from "lodash/map";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

// Engine
import AsyncActions from "../engine/rehabilitation/async-actions";
import rehabillitationTabSelectors from "../engine/rehabilitation/selectors";

function TabOneScreen({}: RootTabScreenProps<"Rehabitation">) {
  const dispatch = useDispatch();
  const rehabilitationExercises = useSelector(rehabillitationTabSelectors.rehabillitations);

  useEffect(() => {
    dispatch(AsyncActions.getRehabillitationsAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {rehabilitationExercises.length === 0 ? (
        <View style={styles.notFound}>
          <Text style={styles.title}>Refresh application</Text>
        </View>
      ) : (
        map(rehabilitationExercises, (exercise: any, index: number) => {
          return (
            <View key={index} style={styles.exercise}>
              <Text style={styles.title}>{exercise.name}</Text>
              <Image
                source={{ uri: `${exercise.imageUrl}` }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          );
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#52D2C3",
    height:'100%',

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exercise: {
    marginTop: 10,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
});

export default TabOneScreen;
