// Modules
const selfSelector = (state) => state.gymReducer;

const pendingSelector = (state: any) => selfSelector(state).pending;
const gymExerciseSelector = (state: any) => selfSelector(state).gymExercise;

const gymTabSelectors = {
  pending: pendingSelector,
  gymExercise: gymExerciseSelector,
};

export default gymTabSelectors;
